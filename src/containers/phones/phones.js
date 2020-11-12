import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchPhones, loadMorePhones, addPhoneToBasket} from '../../actions/Allactions'
import {getPhones} from '../../selectors'
import RenderPhone from './renderPhone/RenderPhone'
import Layout from '../layout/layout'

const Phones = (props) => {
  console.log(props)
  useEffect(() => {
    props.fetchPhones()
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

const mapStateToProps = (state) => ({
  phones: getPhones(state),
})

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)
