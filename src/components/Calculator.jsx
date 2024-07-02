import { useEffect, useState } from 'react'
import React from 'react'
import '../css/calculator.css'

const Calculator = () => {
    let opr='+-/.'.split('')
    var val=''
    const [result,setResult]=useState('')
   
    const clearOne=()=>{
        setResult(result.slice(0,-1))
    }
    const addSome=(value)=>{
        val=value
        if (value==='x'){
             setResult(result.concat('*'))
        }
        else if(value==='sq'){
            let str=result+'**'+2
            setResult(str)
        }else if(value==='cube'){
            let str=result+'**'+3
            setResult(str)
        }else{
            setResult(result.concat(value))
        }
    }
    const clear=()=>{
        setResult('')
    }
    const calculateNow=()=>{
        setResult(eval(result).toString())
    }
    useEffect(()=>{
        let last=result[result.length-1]
        let secLast=result[result.length-2]
        if (secLast===last && (last==="-" || last==="+" || last==="/")){
            setResult(result.slice(0,-1))
        }else if(secLast==='*'&&last==='*'&&result[result.length-3]==='*'){
             setResult(result.slice(0,-1))
        }
    },[result])
    
  return (
    <div className='container'>
        <div className='main'>
            <input type="text" disabled value={result} className='display' placeholder='0'/>
            <div className='btn' onClick={()=>addSome('1')}><span>1</span></div>
            <div className='btn' onClick={()=>addSome('2')}><span>2</span></div>
            <div className='btn' onClick={()=>addSome('3')}><span>3</span></div>
            <div className='btn' onClick={()=>clear()}><span>C</span></div>
            <div className='btn' onClick={()=>addSome('4')}><span>4</span></div>
            <div className='btn' onClick={()=>addSome('5')}><span>5</span></div>
            <div className='btn' onClick={()=>addSome('6')}><span>6</span></div>
            <div className='btn' onClick={()=>clearOne()} ><span>&lt;x</span></div>
            <div className='btn' onClick={()=>addSome('7')} ><span>7</span></div>
            <div className='btn' onClick={()=>addSome('8')} ><span>8</span></div>
            <div className='btn' onClick={()=>addSome('9')} ><span>9</span></div>
            <div className='btn' onClick={()=>addSome('.')} ><span>.</span></div>
            <div className='btn' onClick={()=>addSome('x')} ><span>x</span></div>
            <div className='btn' onClick={()=>addSome('/')} ><span>&#247;</span></div>
            <div className='btn' onClick={()=>addSome('-')}><span>-</span></div>
            <div className='btn' onClick={()=>addSome('+')} ><span>+</span></div>
            <div className='btn'  onClick={()=>addSome('sq')} ><span>n<sup>2</sup></span></div>
            <div className='btn'  onClick={()=>addSome('cube')} ><span>n<sup>3</sup></span></div>
            <div className='btn submit' onClick={()=>calculateNow()}>=</div>
        </div>
    </div>
  )
}
export default Calculator