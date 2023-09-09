"use client"
import { CustomeBottomProbs } from '@/types'
import React from 'react'

const CustomeBottom = ({handleClick,containerStyle,title}:CustomeBottomProbs) => {
  return (
    <button
      disabled ={false}
      type={`button`}
      onClick={()=>{}}
      className={`custom-btn ${containerStyle}`}
    >
      <span className='flex-1'>{title}</span>
    </button>
  )
}

export default CustomeBottom