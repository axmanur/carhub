'use client'
import { SearchManuFacturedProbs } from '@/types'
import React from 'react'
import {Combobox, Transition, } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { manufacturers } from '@/constants'
const SearchManuFactured = ({manuFacturer,setmanuFacturer}:SearchManuFacturedProbs) => {
  
    const [quer, setQuer] = useState('');
    const FilteredManuFacturers = 
    quer === '' 
    ? manufacturers 
    : manufacturers.filter((item)=>(
            item.toLocaleLowerCase()
            .replace(/\s+/g,"")
            .includes(
                quer.toLocaleLowerCase()
                .replace(/\s+/g,"")
            )
        )
    );
    
    return (
    <div className='search-manufacturer'>
        <Combobox  >
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image src='/car-logo.svg' className='ml-4' width={20} height={20} alt='Logo'></Image>
                </Combobox.Button>
                <Combobox.Input 

                    className='search-manufacturer__input' 
                    placeholder='volkswegan' 
                    displayValue={(manuFacturer:string)=>manuFacturer}
                    onChange={(e)=>{setQuer(e.target.value)}}
                />

                <Transition as={Fragment} 
                    leave='transition ease-in duration-100 '
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={()=>setQuer('')}
                >
                    <Combobox.Options  >
                        {
                            
                            (
                                FilteredManuFacturers.map((item)=>(
                                    <Combobox.Option key={item} value={quer} className={({active})=> `relative seach-amnufacturer__option ${active ? 'bg-primary-blue text-white' :'text-gray-900'}`}>
                                        {({ active, selected }) => {
                                            return (
                                                <Combobox.Option as="span" key={item} value={item}>
                                                    {item}
                                              </Combobox.Option>
                                            )
                                        }} 
                                    </Combobox.Option>
                                ))
                            )
                        }
                    </Combobox.Options >
                </Transition>
            </div>
        </Combobox>
        
    </div>
  )
}

export default SearchManuFactured