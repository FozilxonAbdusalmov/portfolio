import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
        <div className='constact_Form'>
            <form >
                <div className='name_container'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="email" name='email' placeholder='email' />
                <textarea type="text" name='message' placeholder='Message' rows={3}></textarea>

                <button>SEND</button>
            </form>

        </div>
    )
}

export default ContactForm
