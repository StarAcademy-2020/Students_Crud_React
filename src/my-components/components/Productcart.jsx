import React from 'react'

export default function Productcart(props) {
  return (
    <div className='card' style={{ width: "18rem" }}>
    <div className='card-body'>
        <h5 className='card-title'>Name:  {props.name}</h5>
        <p className='card-text'>EmailId:  {props.email}</p>
    </div>

</div>
  )
}
