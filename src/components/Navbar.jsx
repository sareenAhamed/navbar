import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
    let links = [
        {name: "Home", link: '/'},
        {name: "Service", link: '/service'},
        {name: "About", link: '/about'},
        {name: "Blogs", link: '/blogs'},
        {name: "Contact", link: '/contact'},
    ];

    const [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Desiner
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open?"close-outline": "menu-outline"}></ion-icon>
            
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 md:static absolute bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-allduration-500 ease-in ${open? 'top-20': 'top-[-490px]'}`}>
            {links.map((Link)=>(
                <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={Link.link} className='text-gray-800 hover:text-gray-500 duration-500'>{Link.name}</a>
                </li>
            ))}
            <Button>Get started</Button>
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar
