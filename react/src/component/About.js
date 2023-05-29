import {React} from 'react'

import "../css/About.scss"

const About = () =>{
//  credits to <a target="_blank" href="https://icons8.com/icon/13441/python">Python</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    return (
        <section className='section' id='about'>
            <div className='container'>
                <h2 className='aboutme'>About Me</h2>
                <div className='aboutme_content'>
                    <div className='info'>
                        <p>I'm a full stack developer, but I'd like to explore different tools/frameworks. I also have background in Machine Learning.</p>
                        <a href="#contact" className='contactbtn'>Contact</a>
                    </div>
                    <div className='skill_container'>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/javascript.png')} alt='javascript'/>
                            <p className='skillname'>Javascript</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/java.png')} alt='java'/>
                            <p className='skillname'>Java</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/kotlin.png')} alt='kotlin'/>
                            <p className='skillname'>Kotlin</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/python.png')} alt='python'/>
                            <p className='skillname'>Python</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/c++.png')} alt='c++'/>
                            <p className='skillname'>C++</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/react.png')} alt='reactjs'/>
                            <p className='skillname'>Reactjs</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/node.png')} alt='nodejs'/>
                            <p className='skillname'>Nodejs</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/spring.png')} alt='spring'/>
                            <p className='skillname'>Spring Boot</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/redis.png')} alt='postgres'/>
                            <p className='skillname'>Redis</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/postgresql.png')} alt='postgres'/>
                            <p className='skillname'>PostgreSQL</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/mongodb.png')} alt='postgres'/>
                            <p className='skillname'>MongoDB</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/docker.png')} alt='docker'/>
                            <p className='skillname'>Docker</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/nginx.png')} alt='nginx'/>
                            <p className='skillname'>Nginx</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/git.png')} alt='git'/>
                            <p className='skillname'>Git</p>
                        </div>
                        <div className='skill'>
                            <img className='skillimg' src={require('../assests/linux.png')} alt='git'/>
                            <p className='skillname'>Linux</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
