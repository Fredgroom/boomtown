import gql from 'graphql-tag'

/**
 * Item and user-related queries and mutations.
 */

// const ItemFields = gql`
//   fragment ItemFields on Item {

    
// //     # @TODO: Create a fragment to query the following fields for an item:
// //     #
// //     id
// //     title
// //     imageurl
// //     description
// //     # created
// //     tags {
// //       id
// //       title
// //     }
// //     itemowner {
// //     id 
// //     fullname
// //     email
// //     bio
// //     }
// //     borrower {
// //       id
// //       fullname
// //       email
// //       bio
// //     }
// //     #
// //     # See the Apollo docs for instructions on how to use fragments:
// //     # https://www.apollographql.com/docs/angular/features/fragments.html
// //   }
`
// export const ITEM_QUERY = gql`
//   query item($id: ID!) {
//     item(filter: $id) {
//       ...ItemFields
//     }
//     # @TODO: Query an item by its id and return the ItemFields fragment.
//   }
//   ${ItemFields}
// `

export const ALL_ITEMS_QUERY = gql`
 query {
  items {
    	id 
    title
    description
    imageurl
    itemowner {
      id
      fullname
    }
    borrower {
      id
    }
    tags {
      id
      title
    }
    created
      }
  }

`

// export const ALL_USER_ITEMS_QUERY = gql`
//  query user($id: ID!, $bio: String, $email: String!, $fullname: String! ) {
//    user(id: ID){
//    ...Itemfields
//  }
// }
//  ${ItemFields}
// `

// export const ALL_TAGS_QUERY = gql`
//   query {
//     # @TODO: Query the id and title fields for tags.
//   }
// `

// export const ADD_ITEM_MUTATION = gql`
//   mutation addItem($item: NewItemInput!, $image: Upload!) {
//     # @TODO: Pass the item and image into the addItem mutation as arguments
//     # and return the new item id when the mutation is complete.
//   }
// `

// /**
//  * Auth-related queries and mutations.
//  */

// export const VIEWER_QUERY = gql`
//   query {
//     # @TODO: Query the id, email, fullname, and bio fields for the viewer.
//   }
// `
// export const LOGOUT_MUTATION = gql`
//   mutation {
//     # @TODO: Run the logout mutation.
//   }
// `

// export const SIGNUP_MUTATION = gql`
//   mutation signup($user: SignupInput!) {
//     # @TODO: Pass the user into the signup mutation as an argument
//     # and return the id of the new user when the mutation is complete.
//   }
// `

// export const LOGIN_MUTATION = gql`
//   mutation login($user: LoginInput!) {
//     # @TODO: Pass the user into the login mutation as an argument
//     # and return the id of the new user when the mutation is complete.
//   }
// `
