const { ApolloServer } = require('apollo-server-express');
const { apolloUploadExpress } = require('apollo-upload-server');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('../api/schema');
let resolvers = require('../api/resolvers');

module.exports = function({ app, pgResource }) {
  resolvers = resolvers(app);

 
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  // -------------------------------

  const apolloServer = new ApolloServer({
    context: ({ req }) => {
      // @TODO: Uncomment this later when we add auth (to be added to Apollo's context)
      // const tokenName = app.get("JWT_COOKIE_NAME")
      // const token = req ? req.cookies[tokenName] : undefined
      // -------------------------------

      return {
        pgResource
        /**
         * @TODO: Provide Apollo context
         *
         * When initializing Apollo, we can provide a context object which will be
         * passed to each resolver function. This is useful because there are a
         * number of things we'll need to access in every resolver function.
         *
         * Above we can see that we are capturing the cookie from the request object,
         * and retrieving the token. This is important for authentication.
         *
         * Refactor this code and supply any additional information (values, methods, objects...etc)
         * you'll need to use in your resolving functions.
         */
      }
    },
    schema
  })

  apolloServer.applyMiddleware({
    app,
    uploads: true,
    cors: 'CORS_CONFIG',
    // -------------------------------
    uploads: apolloUploadExpress({
      maxFileSize: 10000000 // 10mb
    })
  })
}
