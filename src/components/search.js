import React, {useState} from 'react'
import {connect} from 'react-redux'

import {searchPhone} from '../actions/Allactions'

const Search = (props) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
        setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.searchPhone(value)
  }

  return (
    <div className="well blosd">
      <h3 className="lead">Quick shop</h3>
      <div className="input-group">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </form>
        <span className="input-group-btn">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  searchPhone,
}

export default connect(null, mapDispatchToProps)(Search)
