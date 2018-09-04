import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import ItemsContainer from '../../containers/ItemsContainer';
import {connect} from 'react-redux';
import styles from './styles'

const Items = ({ classes }) => {
  return (
    <ItemsContainer >
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

const mapStateToProps = ({ items }) => ({
  items
});

export default connect(mapStateToProps)(withStyles(styles)(Items));



