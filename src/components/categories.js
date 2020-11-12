import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import classNames from 'classnames'


import {getCategories, getActiveCategoryId} from '../selectors'


const Categories = ({categories, activeCategoryId }) => {
  
  const renderCategory = (category, index) => {
    
    const linkClass = classNames({
      'list-group-item': true,
      active: category.id === activeCategoryId ? true : false,
    })
    return (
      <Link to={`/categories/${category.id}`} className={linkClass} key={index}>
        {category.name}
      </Link>
    )
  }

  const renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      active: activeCategoryId === undefined ? true : false,
    })
    return (
      <Link to="/" className={linkClass}>
        All
      </Link>
    )
  }

  return (
    <div className="well">
      <h4>Brand</h4>
      <div className="list-group">
        {renderAllCategory()}
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  )
}

//ownProps  информация из редакс роутера
const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps),
})

export default compose(withRouter, connect(mapStateToProps, null))(Categories)
