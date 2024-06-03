import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../picture/web-developer-logo-template_674356-207.avif'
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from './MobileNav/MobileNav';
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };




    return (
        < >
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav_wrapper conatiner'>

                <div className='nav_container'>
                    <img className='logo' src={logo} alt="Web Developer Logo" />
                    <ul>
                        <li>
                            <a className='menu_item' href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Skills" className='menu_item'>Skills</a>
                        </li>
                        <li>
                            <a href="/WorkExperience" className='menu_item'>Work Experience</a>
                        </li>
                        <li>
                            <a href="/ContactMe" className='menu_item'>Contact Me</a>
                        </li>
                        <button className='contact_btn' onClick={toggleMenu}>Hire Me

                        </button>

                    </ul>
                    <button className='menu_btn' onClick={toggleMenu}>
                        {openMenu ? <FaTimes style={{ fontSize: "1.5rem" }} /> : <FaBars style={{ fontSize: "1.5rem" }} />}
                    </button>

                </div>
            </nav >
        </>
    )
}

export default Navbar