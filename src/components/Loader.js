import React, { Component } from 'react'
import loading from "./loading.gif"


export class Loader extends Component {
     mystyle={
        height: "70vh"
    }
  render() {
    return (
      <div className='text-center loader' style={this.mystyle}>
       <img src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Loader