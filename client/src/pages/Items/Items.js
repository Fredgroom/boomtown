import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ItemsContainer from '../../containers/ItemsContainer';

import styles from './styles'

const Items = ({ classes }) => {
  return (
    <ItemsContainer>
  {({ itemsData: { items, loading } }) => {
    return loading
      ? (
          <p>Loading...</p>
      )
      : (
          <p>Items go here</p>
      );
  }}
</ItemsContainer>
  )
}

export default withStyles(styles)(Items)



