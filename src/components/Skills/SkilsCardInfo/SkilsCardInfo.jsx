import React from 'react';
import './SkilsCardInfo.css';

function SkilsCardInfo({ heading, skills }) {
    return (
        <div className='skillsInfoCard'>
            <h6>{heading}</h6>
            <div className='skills_info_content'>
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className='skill_info'>
                            <p>{item.skill}</p>
                            <p className='precentage'>{item.precentage}</p>
                        </div>
                        <div className='skill_progress_bg'>
                            <div className='skill_progress' style={{ width: item.precentage }}></div>
                        </div>

                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SkilsCardInfo;
