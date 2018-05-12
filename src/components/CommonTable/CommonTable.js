import React, { Component } from 'react'
import './CommonTable.css'

export default class CommonTable extends Component {

  state = {
    filter_list: [],
  }

  filter_row (val, attr, type) {
    var list = this.state.filter_list.slice();
    
    for (let i = 0; i < list.length; i++) {
      if (list[i].attr == attr) {
        if (val == '') {
          list = list.filter((it, idx) => idx !== i)
          console.log('>>', list)
        } else {
          list[i].val = type == 'number' ? +val : val;
        }
        this.props.set_filters(list)
        return this.setState({ filter_list: list })
      }
    }
    list.push({ val, attr });
    this.props.set_filters(list)
    this.setState({ filter_list: list })
  }

  render() {
    return (
      <div className="CommonTable">
        <div className="CommonTable-container">
          <div className="CommonTable-headers">
            {this.props.headers.map((header, key) => {
              return (
                <div key={key} className="CommonTable-header">
                  <span className="CommonTable-header_title">{header.title}</span>
                  <input 
                    type="text" 
                    className="CommonTable-header_filter"
                    onChange={({ target: { value } }) => this.filter_row(value, this.props.attrs[key], header.type)}
                  />
                </div>
              )
            })}
          </div>
          {this.props.features.map((feature, feature_key) => {
            return (
              <div className="CommonTable-item" key={feature_key}>
                {this.props.attrs.map((field, field_key) => (
                  <div className="CommonTable-item_field" key={field_key}>
                    {field == this.props.date_field 
                      ? feature[field]
                        .replace('T', ' ')
                        .replace('.706Z', '')
                        .replace(/\-/g, '.') 
                      : feature[field]
                    }
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
