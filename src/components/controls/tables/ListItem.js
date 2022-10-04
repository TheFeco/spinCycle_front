import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class ListItem extends Component {
  render() {
    return (
      <Grid className="list__item">
        {this.props.children}
      </Grid>
    )
  }
}

export default ListItem
