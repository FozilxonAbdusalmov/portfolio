import React from 'react'
import './MobileNav.css'
import logo from "../../../picture/web-developer-logo-template_674356-207.avif"

function MobileNav({ isOpen, toggleMenu }) {
    return (
        <>
            <div className={`mobil_menu ${isOpen ? " active" : ""}`} onClick={toggleMenu}>
                <div className='mobile_menu_container'>
                    <img className='logo' src={logo} alt="" />

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

                        <button className='contact_btn' onClick={() => { }}>Hire Me</button>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default MobileNav
