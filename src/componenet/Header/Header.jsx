/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="" >
                <header>
                    {/* Navigation Bar using React Router */}
                    <nav className="  flex flex-wrap items-center justify-between  w-full  py-4 md:py-0 px-4 text-lg text-gray-700 head">
                        <div>
                            <Link to="/home"><img className="h-8 " src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg" alt="" /></Link>
                        </div>
                        
                        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                            <ul className="  pt-4 text-base text-gray-700 md:flex md:justify-between  md:pt-0" >
                                <li>
                                    {/* <a  href="/"></a >
                                    active. This will be joined with the classNameName prop. */}
                                    <NavLink className="md:p-4 text-xl font-medium py-2 text-white block hover:text-black" to="/home" activeClassName="selected">Home</NavLink>
                                </li>
                                <li>
                                    {/* <a className="md:p-4 py-2 block hover:text-purple-400" href="/"  ></a > */}
                                    <NavLink className="md:p-4 text-xl font-medium py-2 text-white block hover:text-black"to="/services" activeClassName="selected">Services</NavLink>
                                </li>
                                <li>
                                    {/* <a className="md:p-4 py-2 block hover:text-purple-400" href="/" >Customers</a  > */}
                                    <NavLink className="md:p-4 text-xl font-medium py-2 text-white block hover:text-black" to="/about" activeClassName="selected">About</NavLink>
                                    
                                </li>
                                <li>
                                    {/* <a className="md:p-4 py-2 block hover:text-purple-400" href="/"  >Blog</a > */}
                                    <NavLink className="md:p-4 text-xl font-medium py-2 text-white block hover:text-black" to="/works" activeClassName="selected">How it works</NavLink>
                                </li>
                                <li>
                                    {/* <a className="md:p-4 py-2 block hover:text-purple-400 text-purple-500" href="/" >Sign Up</a > */}
                                    <NavLink className="md:p-4 text-xl font-bold py-2 text-white block hover:text-black" to="/services" activeClassName="selected">Sign Up</NavLink>
                                </li>
                            </ul>
                        </div>
                </nav>
                </header>
  
  
  {/* <div className="px-4">
      <div
        className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-2xl
          rounded-lg
          my-16
          p-16
        "
      >
        <h1 className="text-2xl font-medium">Responsive Navbar with TailwindCSS</h1>
      </div>
    </div> */}
</div>

        </div>
    );
};

export default Header;