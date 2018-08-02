import { withStyles } from '@material-ui/core/styles'
import React from 'react'

import styles from './styles'
import AccountForm from '../../components/AccountForm';

const Share = ({ classes }) => {
  return (
    <div>
      <p>
        This is the share page located at <code>/share</code>.
      </p>
     <AccountForm>
       </AccountForm> 
    </div>
    
  )
}

export default withStyles(styles)(Share)
