import React from 'react'
import './SkillsCard.css'

function SkillsCard({ title, iconUrl, isActive, onClick }) {
    return (
        <div className={`skillaCard${isActive ? "active" : ""}`} onClick={() => onClick()}>
            <div className='skill_icon'>
                <img  src={iconUrl} alt={title} />
            </div>

            <span>{title}</span>


        </div >
    )
}

export default SkillsCard
