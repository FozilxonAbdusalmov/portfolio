import React from 'react'
import './ContactMe.css'
import ContactCard from './ContactCard/ContactCard'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import ContactForm from './ContactForm/ContactForm';
function ContactMe() {
    return (
        <section className='conatct_conatiner'>
            <h5>Contact Me</h5>

            <div className='contact_content'>
                <div className='contact_content_item' style={{ flex: 1 }}>
                    <ContactCard iconUrl={<FcGoogle />} text="@abdusalamovfozilxon2006gmail.com" />
                    <ContactCard iconUrl={<FaGithub />} text="https://github.com/FozilxonAbdusalmov" />
                </div>
                <div className='contact_content_items' style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>

        </section>
    )
}

export default ContactMe
