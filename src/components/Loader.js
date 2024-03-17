import React from 'react'
import loading from './loading.gif'
 const Loader =()=> {
  
    return (
      <div className='text-center' style={{height: "70vh"}}>
        <img src={loading} alt='Loader'></img>
        
      </div>
    )
  }


export default Loader