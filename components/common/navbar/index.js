import React from 'react'

import logo from "../../../img/logo.jpeg"
import Image from 'next/image';
import { useState } from 'react'



export default function Navbar() {



  const Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#aboutus" },
    { name: "Products", link: "#products" },
    { name: "Contact", link: "#contactus" }
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full  top-0 left-0 sticky p-1 z-50  border-b bg-white  border-[#d10006] '>
      <div className='flex items-center justify-between  '>
        <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800'>
          <div className="flex items-center flex-shrink-0    bg-transparent ">
            <a href="#home">
              <Image className='bg-tramsparent'
                alt="ATB"
                src={logo}
                width={350}
                height={90}
                priority
              />                                
              <p className='text-left text-xs pl-5'>Experience you can trust, service you can count on.</p>

            </a>
            
          </div>
          
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
          <button name={open ? 'close' : 'menu'}><div className="w-5 h-1 bg-[#d10006] mb-1"></div>
            <div className="w-5 h-1 bg-[#d10006] mb-1"></div>
            <div className="w-5 h-1 bg-[#d10006]"></div></button>
        </div>
        <ul className={`lg:flex lg:items-center  lg:pb-0 pb-12 absolute  
       lg:static   lg:z-auto z-[-1] right-0 items-center lg:w-auto lg:pl-0 pl-9
        transition-all duration-500 ease-in ${open ? 'top-28 bg-red-50  lg:bg-transparent ' : 'top-[-490px] bg-transparent'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='lg:ml-8  text-sm font-bold lg:my-0 my-7 text-right pr-20 lg:pr-0  '>
                <a href={link.link} onClick={() => setOpen(!open)} className='  hover:text-[#d10006] duration-500'>{link.name}</a>
              </li>
            )) 
          }
          <div className="lg:flex flex-1 inline-block text-sm  py-4    leading-none  rounded">
            <a href="#" 
              className="bg-black text-white border-[#fbc237] border shadow-2xl   text-base font-medium rounded-full inline-flex h-10 w-full    
              py-2 px-10 mx-4 text-center justify-center items-center hover:bg-[#d10006]"
            >
              <span className="px-1  text-sm">Login</span>
            </a>
            
         
          </div>
          
        </ul>
       
      </div>
      
    </div>
    
  ) 
}

