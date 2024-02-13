import React from 'react'
import skills from '../../assets/data/skills.json'
console.log(skills);
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1>Magali JOUAN</h1>
            {
                skills.map((skill, index) => {
                    return (<h3 key={index}>{skill.name}</h3>)
                })
            }
        </div>
    )
}

export default Home
