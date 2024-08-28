import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Menu from './Menu'
import NavbarIcons from './NavbarIcons'
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        <div className="h-full flex items-center justify-between md:hidden">
            {/*  MOBILE */}
            <Link href='/'>
                <div className="text-2xl tracking-wide">LAMA</div>
            </Link>
            <Menu/>
        </div>


        {/* Bigger Screens */}
        <div className="hidden md:flex items-center justify-center gap-8 h-full">
            {/* left */}
            <div className="w-1/3 xl:w-1/2 flex items-center justify-between gap-12">
            <Link href='/' className='flex items-center gap-3'>
                <Image 
                    src='/logo.png' 
                    alt="" width={24} 
                    height={24} 
                    className="cursor-pointer" 
                />
            <div className="text-2xl tracking-wide">LAMA</div>
            </Link>
            <div className="hidden xl:flex gap-4">
            <Link href='/'>Home</Link>
            <Link href='/'>Shop</Link>
            <Link href='/'>Deals</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
            </div>
            </div>
            {/* right */}
            <div className="w-2/3 flex items-center justify-between gap-8 xl:w-1/2">
                <SearchBar/>
                <NavbarIcons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar