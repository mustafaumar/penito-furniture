import React from 'react'

const Benefits = (props) => {
  return (
    <div className='text-center my-4 w-3/4 m-auto'>
      <img src={props.image} alt={props.alt} className='m-auto mb-3'/>
      <p className='text-4xl font-normal text-clr1'>{props.head}</p>
      <p className='text-clr2 font-medium mx-auto my-3'>{props.main}</p>
    </div>
  )
}

export default Benefits
