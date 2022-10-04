import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class ListHeader extends Component {
  render() {
    return (
      <Grid className="list__header">
        {this.props.children}
      </Grid>
    )
  }
}

export default ListHeader
