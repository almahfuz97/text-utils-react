import React from 'react'

export default function Buttons(props) {
   
  return (
    <div className='mb-3'>
      <button onClick={props.onClick} type="button" className="btn btn-primary me-3 btn-sm shadow-lg">{props.name}</button>
    </div>
  )
}
