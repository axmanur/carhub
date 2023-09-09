import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CustomeBottom } from '.'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 mb-8' >
        <Link href="/">
          <Image src={'/logo.svg'} width={118} height={18} className='object-contain' alt=''/>
        </Link>
         <CustomeBottom title='Sign in' containerStyle='text-primary-blue rounded-full bg-white min-w[130px]' />
      </nav>
    </header>
  )
}

export default Navbar