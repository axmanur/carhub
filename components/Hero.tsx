"use client"
import React from 'react'
import { CustomeBottom } from '.'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = ()=>{}
  return (
    <div className='hero mt-10'>
        <div className="flex-1 pt-6 padding-x">
            <h1 className="hero__title">
                Finad,book or rent a car -quickly and easly!
            </h1>
            <p className="hero__subtitle">
                steamline your car rental expriance with our effortless booking process
            </p>
            <CustomeBottom 
             title = "Explore Cars"
             containerStyle = "bg-primary-blue text-white rounded-full mt-10 "
             handleClick ={handleScroll}
             />
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" fill className={`object-contain `} alt={''} />
                <div className={`hero__image-overlay`} />
            </div>
        </div>
    </div>
  )
}

export default Hero