const jwt = require('jsonwebtoken');

const { ApolloError } = require('apollo-server');

// @TODO: Uncomment these lines later when we add auth
// const jwt = require("jsonwebtoken")
const authMutations = require('./auth');
// -------------------------------
const { UploadScalar, DateScalar } = require('../custom-types');

module.exports = function(app) {
  return {
    Upload: UploadScalar,
    //Date: DateScalar,

    Query: {
      viewer(parent, args, context, info) {
        if (context.token) {
          return jwt.decode(context.token, app.get('JWT_SECRET'));
        }
        return null;
      },
      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems(filter);
          return items;
        } catch (e) {
          throw new ApolloError(e);
        }
        // -------------------------------
      },
      async tags(parent, { id }, { pgResource }, info) {
        // @TODO: Replace this mock return statement with the correct tags from Postgres
        try {
          const tags = await pgResource.getTags();
          return tags;
        } catch (e) {
          throw new ApolloError(e);
        }
        // -------------------------------
      }
    },

    User: {
      /**
       *  @TODO: Advanced resolvers
       *
       *  The User GraphQL type has two fields that are not present in the
       *  user table in Postgres: items and borrowed.
       *
       *  According to our GraphQL schema, these fields should return a list of
       *  Items (GraphQL type) the user has lent (items) and borrowed (borrowed).
       *
       */
      // @TODO: Uncomment these lines after you define the User type with these fields
      items(parent, args, { pgResource }, info) {
        const items = pgResource.getItemsForUser(parent.id);
        // @TODO: Replace this mock return statement with the correct items from Postgres
        return items;
        // -------------------------------
      },
      borrowed(parent, args, { pgResource }, info) {
        // @TODO: Replace this mock return statement with the correct items from Postgres
        const item = pgResource.getBorrowedItemsForUser(parent.id);
        return item;
        // -------------------------------
      }
      // -------------------------------
    },

    Item: {

      // @TODO: Uncomment these lines after you define the Item type with these fields
      async itemowner(parent, args, { pgResource }, info) {
        const itemOwner = await pgResource.getUserById(parent.ownerid);
        // @TODO: Replace this mock return statement with the correct user from Postgres
        return itemOwner;
        //
        // -------------------------------
      },
      async tags(parent, args, { pgResource }, info) {
        const tagsList = pgResource.getTagsForItem(parent.id);
        // @TODO: Replace this mock retur n statement with the correct tags for the queried Item from Postgres
        return tagsList;
        // -------------------------------
      },
      async borrower(parent, args, { pgResource }, info) {
        const borrower = await pgResource.getUserById(parent.borrowerid);
        if (!borrower) {
          return null;
        }
        return borrower;
 
        // -------------------------------
      }
    },

    Mutation: {
      // @TODO: Uncomment this later when we add auth
      ...authMutations(app),
      // -------------------------------

      async addItem(parent, args, context, info) {

        const image = await args.image;
        const user = await jwt.decode(context.token, app.get('JWT_SECRET'));
        const newItem = await context.pgResource.saveNewItem({
          item: args.item,
          image: image,
          user
        });
        return newItem;
      }
    }
  };
};