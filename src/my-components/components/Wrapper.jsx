import React from 'react'
import Menu from './menu'

function Wrapper(props) {
  return (
    <>
      <Menu/>
      <div>
        {props.children}
      </div>
    </>
  )
}

export default Wrapper
