import React from 'react';
import { Link,  NavLink } from 'react-router';
import logoImg from '../assets/logo.png'
import gitPng from '../assets/github.png'
import  './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li> <Link to='/'>Home</Link></li>
                            <li><Link to='/apps'>Apps</Link></li>
                            <li><Link to='/installed'>Installation</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center '>
                        <img className='w-[40px] h-[40px] mr-2' src={logoImg} alt="" />
                        <Link to='/' className="text-2xl text-[#632EE3]"><span className='font-bold'>HERO.IO</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li> <NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/apps'>Apps</NavLink></li>
                        <li><NavLink to='/installed'>Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <a target='_blank' href="https://github.com/akashchy23">
                        <button className='flex items-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                            <img className='w-[20px] h-[20px] mr-2' src={gitPng} alt="" />
                            <p className='text-white'>Contribute</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;