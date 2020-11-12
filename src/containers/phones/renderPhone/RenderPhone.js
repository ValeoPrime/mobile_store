import React from 'react'
import {Link} from 'react-router-dom'

const RenderPhone = ({phone, index}) => {
  
  const shortDescription = `${phone.description.slice(0, 60)}...`
  
  return (
    <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
      <div className="thumbnail">
        <img className="img-thumbnail" src={phone.image} alt={phone.name} />
        <div className="caption">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>
            <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
          </h4>
          <p>{shortDescription}</p>
          <p className="itemButton">
            <button className="btn btn-primary">Buy Now!</button>
            <Link to={`/phone/${phone.id}`} className="btn btn-default">
              More info
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RenderPhone
