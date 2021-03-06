import React, { Component } from 'react'
import './CommonTable.css'

export default class CommonTable extends Component {

  state = {
    filter_list: [],
    active_page: 1,
    fields: {},
  }

  componentDidMount () {
    const fields = {};
    this.props.attrs.forEach(({ title }) => {
      fields[title] = '';
    });
    this.setState({ fields });
  }

  async choose_page (page_num) {
    await this.setState({ active_page: page_num })
    await this.props.event_choose_page(this.props.limit * this.state.active_page - this.props.limit)
  }

  filter_row (val, attr, type) {
    var list = this.state.filter_list.slice();
    for (let i = 0; i < list.length; i++) {
      if (list[i].attr === attr) {
        if (val === '') {
          list = list.filter((it, idx) => idx !== i)
        } else {
          list[i].val = val;
        }
        this.props.event_set_filters(JSON.stringify(list))
        return this.setState({ filter_list: list })
      }
    }
    list.push({ val, attr });
    this.props.event_set_filters(JSON.stringify(list))
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
                  <span className="CommonTable-header_title">{header}</span>
                  <input 
                    type="search" 
                    className="CommonTable-header_filter"
                    onChange={({ target: { value } }) => this.filter_row(value, this.props.attrs[key].title)}
                  />
                </div>
              )
            })}
          </div>
          <div className="CommonTable-items">
            {this.props.features.map((feature, feature_key) => {
              return (
                <div className="CommonTable-item" key={feature_key}>
                  <button className="CommonTable-delete"
                    onClick={() => this.props.event_delete_row(feature)}>
                    <i className="CommonTable-delete_icon mdi mdi-delete"></i>
                  </button>
                  
                  {this.props.attrs.map((attr, attr_key) => (
                    <div className="CommonTable-item_field" key={attr_key}>
                      {feature[attr.title]}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
          
          <div className="CommonTable-panel">
            <div className="CommonTable-features_count">{this.props.features_count}</div>
            <div className="CommonTable-pagination">
              {this.state.active_page !== 1 ? 
                <button
                  onClick={() => this.choose_page(this.state.active_page - 1)}
                  className="CommonTable-pagination_btn"
                >{'<'}</button>
              : ''}
              
              {[...Array(Math.ceil(this.props.features_count / this.props.limit))].map((it, key) => (
                <button key={key} 
                  onClick={() => this.choose_page(key+1)}
                  className={key + 1 == this.state.active_page ? 'CommonTable-pagination_btn CommonTable-pagination_btn--active' : 'CommonTable-pagination_btn'}
                >{key+1}</button>
              ))} 

              {this.state.active_page !== Math.ceil(this.props.features_count / this.props.limit) ? 
                <button
                  onClick={() => this.choose_page(this.state.active_page + 1)}
                  className="CommonTable-pagination_btn"
                >{'>'}</button>
              : ''}
            </div>
          </div>

          <div className="CommonTable-new_item">
            <button className="CommonTable-new_item_add"
              onClick={() => this.props.event_create_row(this.state.fields)}>
              <i className="CommonTable-new_item_add_icon mdi mdi-plus"></i>
            </button>
            {this.props.attrs.map((attr, attr_key) => (
              <div className="CommonTable-new_item_field" key={attr_key}>
                {attr.input_type === 'select' ?
                  <select
                    className="CommonTable-new_item_field_select"
                    onChange={({ target: { value } }) => this.setState({ fields: { ...this.state.fields, [attr.title]: value } })}
                  >
                    <option selected disabled></option>
                    {attr.select_list.map((it, key) => 
                      <option
                        key={key}
                        value={it[attr.value_field]}
                      >
                        {it[attr.name_field]}
                      </option>
                    )}
                  </select>
                : 
                  <input
                    type={attr.input_type}
                    className="CommonTable-new_item_field_input"
                    onChange={({ target: { value } }) => this.setState({ fields: { ...this.state.fields, [attr.title]: value }})}
                  /> 
                }
              </div>
            ))}
          </div>
        </div>

      </div>
    )
  }
}
