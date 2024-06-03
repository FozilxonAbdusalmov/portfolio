import React from 'react'
import './Hero.css'


function Hero() {
    return (
        <section className='hero_conatiner'>
            <div className='hero_content'>
                <h2>Hi I'am <span> Fozilxon Abdusalamov</span></h2>
                <h3>Full Stack Developer</h3>
                <p>
                    I am an experienced full-stack web developer with over 1 year of experience in the IT field. I am passionate about collaboration, innovation, and creating high-quality software solutions. I consider myself to be a skilled individual ready to provide valuable insights and collaborate with international teams.
                </p>

            </div>

            <div className='hero_img'>
                <div >
                    <div className='tech_icon'>
                        <img className="teach_icon_img" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" />
                    </div>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4788760-3988051.png" alt="" />
                </div>
                <div>
                    <div className='teach_icon' style={{ position: "relative" }}>
                        <img style={{ width: "4rem", height: "auto", top: '-80px', right: "-30px", position: "absolute" }} className="teach_icon_img" src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" />
                    </div>
                    <div style={{ position: "relative" }} className='teach_icon'>

                        <img style={{ width: "3rem", height: "auto", top: '-130px', right: "-250px", position: "absolute" }} className="teach_icon_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="CSS" />
                    </div>
                    <div style={{ position: "relative" }} className='teach_icon'>
                        <img style={{ width: "3rem", height: "auto", top: '-200px', right: "-230px", position: "absolute" }} className="teach_icon_img" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" />
                    </div>


                    <div style={{ position: "relative" }} className='teach_icon'>
                        <img style={{ width: "4rem", height: "auto", top: '-220px', right: "110px", position: "absolute" }} className="teach_icon_img" src="https://seekvectors.com/files/download/node%20js%20logo.png" alt="MongoDB" />
                    </div>
                    <div style={{ position: "relative" }} className='teach_icon'>
                        <img style={{ width: "3rem", height: "auto", top: '-70px', right: "-140px", position: "absolute" }} className="teach_icon_img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="HTML" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
