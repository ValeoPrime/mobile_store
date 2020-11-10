import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {fetchPhones} from '../../actions/Allactions'

const Phones = (props) => {

  useEffect(() => {
    props.fetchPhones()
  }, [props])




  return <div>Phones</div>
}

const mapDispatchToProps = {
  fetchPhones,
}

export default connect(null, mapDispatchToProps)(Phones)
