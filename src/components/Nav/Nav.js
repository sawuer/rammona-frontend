import React, { Component } from 'react'
import './Nav.css'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Nav extends Component {
  route = src => this.props.history.push(src);
  render() {
    return (
      <div className="Nav">
        
        <button 
          className={this.props.history.location.pathname === '/transactions' ? 'Nav-item Nav-item--active' : 'Nav-item'}
          onClick={() => this.route('/transactions')}>
          <i className="Nav-item_icon mdi mdi-bell"></i>
        </button>

        <button
          className={this.props.history.location.pathname === '/settings' ? 'Nav-item Nav-item--active' : 'Nav-item'}
          onClick={() => this.route('/settings')}>
          <i className="Nav-item_icon mdi mdi-bell"></i>
        </button>

      </div>
    )
  }
}

export default connect(({

}) => ({

}), {

})(withRouter(Nav));
