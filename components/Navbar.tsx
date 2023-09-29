"use client"
import React from 'react'
import { Airplay } from 'lucide-react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Search from './Search';
import { ThemeSwitcher } from './ThemeSwitcher';

type Props = {

}

const Nav: React.FC<Props> = () => {
  return (
    <Navbar shouldHideOnScroll className='border-b mb-4 shadow-lg border-s-gray-400 pb-4'>
      <NavbarBrand className='cursor-pointer'>
        <Link href="/">
        <Airplay size={40} />
        <p className="font-bold text-inherit">MovieBase</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        
        <NavbarItem>
          
            <Link href='/trending' className='font-bold'>Trending</Link>
          
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/Signin">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/Signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Nav