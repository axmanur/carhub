import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import { link } from 'fs'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100 '>
      <div className="flex max:md:flex-col flex-wrap justify-between gap-5 sn:px-16 px-6 py-10">
        <div className="flex flex-col justify-start gap-6  ">
          <Image src="/logo.svg" alt='' width={180} height={18} className='object-contain'/>
          <p className="text-base text-gray-700"> carHub 2023 <br/>All right are reseved &copy;</p>
        </div>

        <div className="footer__links">
           {
            footerLinks.map((item)=>(
              <div key={item.title} className='footer__link'>
                <div className='font-bold text-3xl'>
                  {item.title}
                  <h3 className='flex flex-col flex-wrap'>
                    {
                      item.links.map((element)=>(
                        <Link key={element.title} href={element.url} className='text-gray-500' >
                          {element.title}
                        </Link>
                      ))
                    }
                  </h3>
                </div>
              </div>
            ))
           }
        </div>
        </div>


        <div className="flex justify-between items-center flex-wrap mt-10 border-gray-100 sm:px-16 px-6 py-10">
          <p> @2023 CarHub. All Right Reserved</p>
          <div className="footer__copyrihts-link">
            <Link href="/ " className='text-gray-500 p-6'>Pirvacy</Link>
            <Link href="/ " className='text-gray-500'>Terms of use</Link>
          </div>
        </div>

       
      
    </footer>
  )
}

export default Footer