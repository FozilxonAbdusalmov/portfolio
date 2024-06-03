import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillsCard from './SkillsCard/SkillsCard'
import SkilsCardInfo from './SkilsCardInfo/SkilsCardInfo'

function Skills() {

    const [slectedSkill, setSelectedSkill] = useState(SKILLS[0])
    const handSelectedSkills = (data) => {
        setSelectedSkill(data)
    }

    return (
        <section className='skills_container'>
            <h5>Technical Profency</h5>

            <div className='skills_content'>
                <div className='skills'>
                    {SKILLS.map((item, index) => (
                        <SkillsCard key={item.title} iconUrl={item.icon} title={item.title}
                            isActive={setSelectedSkill.title === item.title}
                            onClick={()=>{
                                handSelectedSkills(item)
                            }}

                        />

                    ))}
                </div>


                <div className='skill_Info'>
                    <SkilsCardInfo
                        heading={slectedSkill.title}
                        skills={slectedSkill.skills}

                    />

                </div>

            </div>

        </section>
    )
}

export default Skills
