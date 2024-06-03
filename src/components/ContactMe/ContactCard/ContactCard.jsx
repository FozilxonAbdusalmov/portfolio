import React from 'react'
import './ContactCard.css'
function ContactCard({ iconUrl, text }) {
    return (
        <div className='contact_card_details'>
            <div className='icon'>
                {iconUrl}
            </div>
            <p>{text}</p>

        </div>
    )
}

export default ContactCard
