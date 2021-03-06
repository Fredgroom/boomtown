import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// @TODO: Uncomment each module as needed in your client app
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
// -------------------------------
import { ViewerProvider } from './context/ViewerProvider'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'
import client from './apollo'

/**
 * @TODO: Initialize Redux Store
 */

import store from './redux'

// @TODO: Remove this import once you have your router working below
import Layout from './routes/Layout'
// -------------------------------

import './index.css'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <ViewerProvider>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </ViewerProvider>
        </ApolloProvider>
      </MuiThemeProvider>
    </ReduxProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
