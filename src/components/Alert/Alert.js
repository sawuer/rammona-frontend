import React from 'react'
import './Alert.css'

export default props => (
  <div style={props.style} className="Alert">
    {props.msg}
  </div>
)