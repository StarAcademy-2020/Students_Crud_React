import React from 'react'

export default function Events() {
    function onClickEvents()
    {
        alert("Events calling");
    }

  return (
    <>
        <h1>Events Colling</h1>
        <button className='btn btn-outline-primary' onClick={onClickEvents}>Click Me</button>
    </>
  )
}
