'use client'
import { SearchManuFacturedProbs } from '@/types'
import React from 'react'
import {Combobox, Transition, } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { manufacturers } from '@/constants'
import { CheckIcon } from '@heroicons/react/20/solid'
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

<Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuer('')}
          >
            <Combobox.Options className="m-6">
              {FilteredManuFacturers.length === 0 && quer !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                FilteredManuFacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary-blue rounded-lg text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
            </div>
        </Combobox>
        
    </div>
  )
}

export default SearchManuFactured