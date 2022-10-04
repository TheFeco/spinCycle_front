import React, { Component } from 'react'
import _ from 'lodash'
import faker from 'faker'
import { Dropdown } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class DropdownRemote extends Component {
  state = {
      isFetching: false,
      multiple: true,
      search: true,
      searchQuery: null,
      value: [],
      options: this.props.options,
  }

  componentDidUpdate(next) {
    if(next.options !== this.props.options) {
      this.setState({options: next.options})
    }
  }

  handleChange = (e, { value }) => { 
    this.setState({ value }) 
    this.props.handleChange(value)
  } 

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  render() {
    const { multiple, options, isFetching, search, value } = this.state
    const { placeHolder, label } = this.props

    return (
      <div>
          <Dropdown
            fluid
            selection
            multiple={multiple}
            search={search}
            options={options}
            value={value}
            placeholder={placeHolder}
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
            label={label}
            disabled={isFetching}
            loading={isFetching}
          />
        </div>
    )
  }
}

DropdownRemote.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default  DropdownRemote