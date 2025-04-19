import React from 'react';
import { NavLink } from 'react-router';
import { IoMdCart } from "react-icons/io";
import { IoBookmarkSharp } from "react-icons/io5";




const Navbar = () => {
    return (
        <div className=" px-3 py-2 md:px-10 flex items-center justify-between bg-base-100 shadow-sm">
        <div className="">
          <div className="dropdown flex items-center gap-6">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
             
            </div>
            <h1 className='font-bold text-2xl '>FlagshipFaceOff</h1>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <li><NavLink className={({isActive})=> isActive? 'btn btn-success text-white':'btn'}  to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? 'btn btn-success text-white':'btn'}  to='/about' >About</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? 'btn btn-success text-white':'btn'} to='/cart' ><IoMdCart size={25}/></NavLink></li>
            <li><NavLink className={({isActive})=> isActive? 'btn btn-success text-white':'btn'} to='/favorite' ><IoBookmarkSharp size={25}/></NavLink></li>
            </ul>
          </div>
        </div>
       
        <div className=" hidden lg:block ">
        <div className="">
         <ul className='flex gap-5'>
            <li><NavLink className={({isActive})=> isActive? 'btn btn-success text-white':'btn'}  to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? 'btn btn-success text-white':'btn'}  to='/about' >About</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? 'btn btn-success text-white':'btn'} to='/cart' ><IoMdCart size={25}/></NavLink></li>
            <li><NavLink className={({isActive})=> isActive? 'btn btn-success text-white':'btn'} to='/favorite' ><IoBookmarkSharp size={25}/></NavLink></li>
         </ul>
        </div>
        </div>
      </div>
    );
};

export default Navbar;