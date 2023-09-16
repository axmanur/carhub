"use client"
import { CustomeBottomProbs } from '@/types'
import React from 'react'
import Image from 'next/image'

const CustomeBottom = ({ isDisabled, btnType, containerStyles, textStyles,rightIcon,handleClick,containerStyle,title}:CustomeBottomProbs) => {
  return (
    <button
      disabled ={false}
      type={btnType || "button"}
      onClick={()=>{}}
      className={`custom-btn ${containerStyle}`}
    >
      <span className={`flex-1 ${textStyles}`} >{title}</span>
      {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain ml-6"
        />
      </div>
    )}
    </button>
  )
}

export default CustomeBottom