import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import styles from './styles'
import AccountForm from '../../components/AccountForm';
import ShareForm from '../../components/ShareItemForm';

const Share = ({ classes }) => {
  return (
    <div>
      <h1>
        Share. Borrow. Prosper.
      </h1>
      <ShareForm/>
    </div>
    
  )
}

export default withStyles(styles)(Share)
