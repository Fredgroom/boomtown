const strs = require('stringstream')
function tagsQueryString(tags, itemid, result) {
  /**
   * Challenge:
   * This function is recursive, and a little complicated.
   * Can you refactor it to be simpler / more readable?
   */
  const length = tags.length
  return length === 0
    ? `${result};`
    : tags.shift() &&
        tagsQueryString(
          tags,
          itemid,
          `${result}($${tags.length + 1}, ${itemid})${length === 1 ? '' : ','}`
        )
}
module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text:
          'INSERT into users(fullname, email, password) VALUES ($1, $2, $3) RETURNING *', // @TODO: Authentication - Server
        values: [fullname, email, password]
      }
      try {
        const user = await postgres.query(newUserInsert)
        return user.rows[0]
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw 'An account with this username already exists.'
          case /users_email_key/.test(e.message):
            throw 'An account with this email already exists.'
          default:
            throw 'There was a problem creating your account.'
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: '',
        // @TODO: Authentication - Server
        values: [email]
      }
      try {
        const user = await postgres.query(findUserQuery)
        if (!user) throw 'User was not found.'
        return user.rows[0]
      } catch (e) {
        throw 'User was not found.'
      }
    },
    async getUserById(id) {
      /**
       *  @TODO: Handling Server Errors
       *
       *  Inside of our resource methods we get to determine wen and how errors are returned
       *  to our resolvers using try / catch / throw semantics.
       *
       *  Ideally, the errors that we'll throw from our resource should be able to be used by the client
       *  to display user feedback. This means we'll be catching errors and throwing new ones.
       *
       *  Errors thrown from our resource will be captured and returned from our resolvers.
       *
       *  This will be the basic logic for this resource method:
       *  1) Query for the user using the given id. If no user is found throw an error.
       *  2) If there is an error with the query (500) throw an error.
       *  3) If the user is found and there are no errors, return only the id, email, fullname, bio fields.
       *     -- this is important,don't return the password!
       *
       *  You'll need to complete the query first before attempting this exercise.
       */

      const findUserQuery = {
        text: 'SELECT id, email, fullname, bio FROM users WHERE users.id = $1', // @TODO: Basic queries
        values: [id]
      }

      const user = await postgres.query(findUserQuery)
      return user.rows[0]
      // -------------------------------
    },
    async getItems(idToOmit) {
      const whereClause = idToOmit ? `WHERE items.ownerid != $1` : ''
      const items = await postgres.query({
        text: ` 
        SELECT
          id, 
          title, 
          imageurl, 
          description, 
          ownerid, 
          borrowerid,
          created
          FROM items
        ${whereClause}`,
        values: idToOmit ? [idToOmit] : []
      })
      return items.rows
    },
    async getItemsForUser(id) {
      const items = await postgres.query({
        text: `select * From items where ownerid = $1`,
        values: [id]
      })
      return items.rows
    },
    async getBorrowedItemsForUser(userid) {
      const items = await postgres.query({
        text: `select * From items where borrowerid = $1`,
        values: [userid]
      })
      return items.rows
    },
    async getTags() {
      const tags = await postgres.query({
        text: `SELECT id, title
        FROM tags`,
        values: []
      })
      return tags.rows
    },
    async getTagsForItem(itemid) {
      const tags = await postgres.query({
        text: `SELECT * FROM tags, itemtags WHERE itemtags.itemid = $1 AND itemtags.tagid = tags.id`,
        values: [itemid]
      })
      return tags.rows
    },
    async saveNewItem({ item, image, user }) {
      /**
       *  @TODO: Adding a New Item
       *
       *  Adding a new Item to Posgtres is the most advanced query.
       *  It requires 3 separate INSERT statements.
       *
       *  All of the INSERT statements must:
       *  1) Proceed in a specific order.
       *  2) Succeed for the new Item to be considered added
       *  3) If any of the INSERT queries fail, any successful INSERT
       *     queries should be 'rolled back' to avoid 'orphan' data in the database.
       *
       *  To achieve #3 we'll ue something called a Postgres Transaction!
       *  The code for the transaction has been provided for you, along with
       *  helpful comments to help you get started.
       *
       *  Read the method and the comments carefully before you begin.
       */
      return new Promise((resolve, reject) => {
        /**
         * Begin transaction by opening a long-lived connection
         * to a client from the client pool.
         */
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query('BEGIN', err => {
              // Convert image (file stream) to Base64
              const imageStream = image.stream.pipe(strs('base64'))
              let base64Str = ''
              imageStream.on('data', data => {
                base64Str += data
              })
              imageStream.on('end', async () => {
                // Image has been converted, begin saving things
                const { title, description, tags } = item
                // Generate new Item query
                // @TODO
                // -------------------------------
                // Insert new Item
                // @TODO
                // -------------------------------
                const imageUploadQuery = {
                  text:
                    'INSERT INTO uploads (itemid, filename, mimetype, encoding, data) VALUES ($1, $2, $3, $4, $5) ',
                  values: [
                    // itemid,
                    image.filename,
                    image.mimetype,
                    'base64',
                    base64Str
                  ]
                }
                // Upload image
                const uploadedImage = await client.query(imageUploadQuery)
                const imageid = uploadedImage.rows[0].id
                // Generate image relation query
                // @TODO
                // -------------------------------
                // Insert image
                // @TODO
                // -------------------------------
                // Generate tag relationships query (use the'tagsQueryString' helper function provided)
                // @TODO
                // -------------------------------
                // Insert tags
                // @TODO
                // -------------------------------
                // Commit the entire transaction!
                client.query('COMMIT', err => {
                  if (err) {
                    throw err
                  }
                  // release the client back to the pool
                  done()
                  // Uncomment this resolve statement when you're ready!
                  // resolve(newItem.rows[0])
                  // -------------------------------
                })
              })
            })
          } catch (e) {
            // Something went wrong
            client.query('ROLLBACK', err => {
              if (err) {
                throw err
              }
              // release the client back to the pool
              done()
            })
            switch (true) {
              case /uploads_itemid_key/.test(e.message):
                throw 'This item already has an image.'
              default:
                throw e
            }
          }
        })
      })
    }
  }
}
