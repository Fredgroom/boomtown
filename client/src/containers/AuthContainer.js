import { adopt } from 'react-adopt'
import { Mutation } from 'react-apollo'
import React from 'react'

import client from '../apollo'

import {
  VIEWER_QUERY,
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
  SIGNUP_MUTATION
} from '../apollo/queries'

const signup = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the signup mutation.
   */
  
  return <h1>signup</h1>
}

const login = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the login mutation.
   */
  return <h1>Login></h1>
}

const logout = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the logout mutation.
   */
  return <h1>Logout</h1>
}

const AuthContainer = adopt({
  
  signup,
  login,
  logout
  
})

export default AuthContainer
