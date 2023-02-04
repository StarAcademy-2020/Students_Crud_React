import React, { Component } from 'react'

export default class Message extends Component {
    constructor()
    {
        super()
        this.state={
            message:'Welcome to Visiter'
        }
    }
    changeTextColor() {
      this.setState({
        message:'Thanks for Subscribing'
      })
    }
  render() {
    return (
     <>
     <div>{this.state.message}</div>
        {/* <button className='btn btn-outline-primary' onClick={this.changeTextColor}>Change Color</button> */}
         <button className='btn btn-outline-primary' onClick={()=>this.changeTextColor()}>Change Color</button>
     </>
    )
  }
}
