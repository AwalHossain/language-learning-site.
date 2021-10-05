/* eslint-disable no-unused-expressions */
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navBar = ()=>{
        const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
    
    
    button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
    }
    window.onload = function(){
        navBar()
        }
  
    return (
        <div>
            <div className="" >
                <header>
                    {/* Navigation Bar using React Router */}
                    <nav className="  flex flex-wrap items-center justify-between  w-full  py-4 md:py-0 px-4 text-lg text-gray-700 head">
                    <div>
                        <div>
                            <Link to="/home" className="text-5xl text-white font-bold">Lingua</Link>
                        </div>
                   </div>
                {/* Header svg icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
 
                        
                        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                            <ul className="  pt-4 text-base text-gray-700 md:flex md:justify-between  md:pt-0" >
                                <li>
                                    <NavLink className="md:p-4 text-xl font-medium py-2 text-white block hover:text-black" to="/home" activeClassName="selected">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="md:p-4 text-xl font-medium py-2 text-white block hover:text-black"to="/services" activeClassName="selected">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink className="md:p-4 text-xl font-medium py-2 text-white block hover:text-black" to="/about" activeClassName="selected">About</NavLink>
                                    
                                </li>
                                <li>
                                    <NavLink className="md:p-4 text-xl font-medium py-2 text-white block hover:text-black" to="/works" activeClassName="selected">How it works</NavLink>
                                </li>
                                <li>
                                    <NavLink className="md:p-4 text-xl font-bold py-2 text-white block hover:text-black" to="/signup" activeClassName="selected">Sign Up</NavLink>
                                </li>
                            </ul>
                        </div>
                </nav>
                </header>

            </div>

        </div>
    );
};

export default Header;