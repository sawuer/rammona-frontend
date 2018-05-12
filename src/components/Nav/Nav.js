import React, { Component } from 'react'
import './Nav.css'

// import fetcher from '../../utils/fetcher'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Nav extends Component {
  route = src => this.props.history.push(src);
  render() {
    return (
      <div className="Nav">
        <button className="Nav-item"
          onClick={() => this.route('/settings')}
        >Settings</button>
        <button className="Nav-item"
          onClick={() => this.route('/transactions')}
        >Transactions</button>
      </div>
    )
  }
}

export default connect(({
  
}) => ({

}), {

})(withRouter(Nav));
