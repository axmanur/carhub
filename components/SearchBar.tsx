'use client'

import React from 'react'
import SearchManuFactured from './SearchManuFactured'
import {useState} from 'react'

const SearchBar = () => {
    const [ManuFacturer, setManuFacturer] = useState('')
    const handleSubmit = ()=>{}
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <div className="searchbar__item">
            <SearchManuFactured  manuFacturer = {ManuFacturer} setmanuFacturer= {setManuFacturer} />
        </div>
    </form>
  )
}

export default SearchBar