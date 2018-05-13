import React, { Component } from 'react'
import './CommonTable.css'

export default class CommonTable extends Component {

  state = {
    filter_list: [],
    fields: {},
  }


  componentDidMount () {
    const fields = {};
    this.props.attrs.forEach(attr => {
      fields[attr] = '';
    });
    this.setState({ fields });
  }

  filter_row (val, attr, type) {
    var list = this.state.filter_list.slice();
    for (let i = 0; i < list.length; i++) {
      if (list[i].attr == attr) {
        if (val == '') {
          list = list.filter((it, idx) => idx !== i)
        } else {
          // list[i].val = type == 'number' ? +val : val;
          list[i].val = val;
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
          <div className="CommonTable-items">
            {this.props.features.map((feature, feature_key) => {
              return (
                <div className="CommonTable-item" key={feature_key}>
                  <button className="CommonTable-delete">
                    <i className="CommonTable-delete_icon mdi mdi-delete"></i>
                  </button>
                  
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
        
           <div className="CommonTable-new_item">
            <button className="CommonTable-new_item_add"
              onClick={() => this.props.add_new_row(this.state.fields)}>
              <i className="CommonTable-new_item_add_icon mdi mdi-plus"></i>
            </button>
            {this.props.attrs.map((attr, attr_key) => (
              <div className="CommonTable-new_item_field" key={attr_key}>
                <input
                  type="text"
                  className="CommonTable-new_item_field_input"
                  onChange={({ target: { value } }) => this.setState({ fields: { ...this.state.fields, [attr]: value }})}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    )
  }
}
