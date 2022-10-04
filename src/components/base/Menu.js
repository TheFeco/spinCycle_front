import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';

class MenuApp extends Component {
  render() {
    const { history: { push }} = this.props;

    return (
      <div className="ui large secondary inverted pointing menu__large">
        <Link className="item" to="/" style={{ marginTop: 60 }}>Spincycle</Link>
      </div>
    );
  }
}

export default withRouter(MenuApp);
