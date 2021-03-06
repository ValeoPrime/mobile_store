import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchPhones, loadMorePhones, addPhoneToBasket, fetchCategories} from '../../actions/Allactions'
import {getPhones} from '../../selectors'
import RenderPhone from './renderPhone/RenderPhone'
import Layout from '../layout/layout'

const Phones = (props) => {
  
  useEffect(() => {
    props.fetchPhones()
    props.fetchCategories()
    // eslint-disable-next-line
  }, [])

  const {phones, loadMorePhones, addPhoneToBasket} = props
  return (
    <Layout>
      <div className="books row">
        {phones.map((phone, index) => (
          <RenderPhone addPhoneToBasket = {addPhoneToBasket} phone={phone} index={index} key={index} />
        ))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <button
            onClick={loadMorePhones}
            className="pull-right btn btn-primary"
          >
            Load More
          </button>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state, ownProps) => ({
  phones: getPhones(state, ownProps),
})

const mapDispatchToProps = {
  fetchPhones,
  fetchCategories,
  loadMorePhones,
  addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)
