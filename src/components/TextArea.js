import React, { useState } from 'react'
import Buttons from './Buttons'
import Details from './Details'

export default function TextArea() {
    const [text,setText]=useState({
        text:'',
        isBold: 'fw-normal'
    });

    const handleChange=(e)=>{
        setText((prev)=>{
            return {
                ...prev,
                text: e.target.value
            }
        })
    }

    const copyClick=()=>{
        document.getElementById('textArea').select();
       if( text !=='')navigator.clipboard.writeText(text.text);
        
    }
    const lowerClick=()=>{
        setText((prev)=>{
            const newText= prev.text.toLowerCase();
            return {
                ...prev,
                text: newText
            }

        })
    }
    const upperClick=()=>{
        setText((prev)=>{
            const newText= prev.text.toUpperCase();
            return {
                ...prev,
                text: newText
            }

        })
    }
    const boldClick=()=>{ 
        setText((prev)=>{
            const newText= 'fw-bold';
            return {
                ...prev,
                isBold: newText
            }

        })
    }  

    const extraSpaceClick=()=>{
        setText(prev=>{
            return{
                ...prev,
                text: prev.text.split(/\s/).filter(element=> {return element.length!==0}).join(' ')
            }
        })
    }
  return (
    <div className='container d-flex flex-column  '>
        <div className='mt-5 d-flex  justify-content-start'>      
            <textarea id='textArea' className={`w-100 p-3 ${text.isBold} rounded shadow border-primary border border-2` }style={{minHeight: "200px"}} onChange={handleChange} value={text.text}></textarea>
         </div>
         <div className='mt-3 d-flex flex-wrap'>
            <Buttons onClick={copyClick} name="Copy"></Buttons>
            <Buttons onClick={lowerClick} name="Lowercase"></Buttons>
            <Buttons onClick={upperClick} name="Uppercase"></Buttons>
            <Buttons onClick={boldClick} name="Bold"></Buttons>
            <Buttons onClick={extraSpaceClick} name="CutExtra Space"></Buttons>
         </div>
         <div className='mt-5'>
            <Details text={text.text}></Details>
         </div>
    </div>
  )
}
