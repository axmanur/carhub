'use client'
import { CustomeBottom } from '.'
import { CardProbs } from '@/types'
import { calculateCarRent } from '@/utils'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'

interface CardcardProbs{
    car : CardProbs
}

const CarCard = ({car}:CardcardProbs) => {
    const [isOpen, setIsOpen] = useState(false);
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg,year)
  return (
    <div className='car-card group'>
        <div className="car-cad__content">
            <h2 className="car-card__content-title">    
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
            <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
            {carRent}
            <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
         <Image src={`/hero.png`} alt='car model' fill priority className='object-contain' />
         {/* <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' /> */}
        </div>

        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-grey'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                <p className='text-[14px] leading-[17px]'>
                {transmission === "a" ? "Automatic" : "Manual"}
                </p>
            </div>
            <div className="car-card__icon">
                <Image src="/tire.svg" width={20} height={20} alt="seat" />
                <p className="car-card__icon-text">{drive.toUpperCase()}</p>
            </div>
            <div className="car-card__icon">
                <Image src="/gas.svg" width={20} height={20} alt="seat" />
                <p className="car-card__icon-text">{city_mpg} MPG</p>
            </div>
            </div>

            <div className="car-card__btn-container bg-primary-blue rounded-lg justify-center">
                <CustomeBottom
                    title='View More'
                    containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold ml-4'
                    rightIcon='/right-arrow.svg'
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        

    </div>
  )
}

export default CarCard