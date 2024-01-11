import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin} from "react-icons/fa"
import skillsData from "../data"
import "../styles/home.css"


function Home() {
  return (
    <div className='home'>
        <div className="about">
            <h2>hi my name is </h2>
            <div className="prompt">
                <p>A software developer with passion to learn and create</p>
            </div>
            <div className='social'>
                <FaGithub />
                <FaEnvelope />
                <FaLinkedin />
            </div>
        </div>
        <div className="skills">
            {Object.entries(skillsData).map(([category, data]) => (
                <div key={category}>
                    <h3>{data.title}</h3>
                    <p>{data.skills.join(', ')}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Home