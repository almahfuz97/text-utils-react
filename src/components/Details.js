import React from 'react'

export default function Details(props) {
    const words = props.text.split(/\s/).filter(element=> {return element.length!==0}).length;
    console.log(words)
  return (
    <div>
        <h1><strong>Your Text Summury </strong></h1>
      <p><strong> Total Words:{words} </strong></p>
      <p><strong> Total Characters: {props.text.length}</strong></p>
      <h3 className='fw-bold'>Preview:</h3>
      <p>{props.text}</p>
    </div>
  )
}
