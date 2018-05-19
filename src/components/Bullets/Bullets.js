import React, { Component } from 'react'
import './Bullets.css'

export default class Bullets extends Component {

  state = {
    new_bullet: '',
    input_is_shown: false,
  }

  show_input = () => {
    this.setState({
      input_is_shown: !this.state.input_is_shown
    });
    console.log(this.state.input_is_shown)
  }

  render() {
    return (
      <div className="Bullets">
        <div className="Bullets-container">

          {this.state.input_is_shown ? 
            <div className="Bullets-new_bullet_wrapper">
              <input className="Bullets-new_bullet_input" />
              <button className="Bullets-add_button_create">
                <i className="Bullets-add_button_icon mdi mdi-plus"></i>
              </button>
            </div>
          :
            <button className="Bullets-add_button"
              onClick={() => this.show_input()}
            >
              <i className="Bullets-add_button_icon mdi mdi-plus"></i>
            </button>
          }

          {this.props.bullets.map((it, key) => {
            return <div className="Bullets-bullet" key={key}>{it[this.props.bullet_title]}</div>
          })}

        </div>
      </div>
    )
  }
}
