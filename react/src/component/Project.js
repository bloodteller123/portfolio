import {React} from 'react'


import "../css/Project.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Project = () =>{

    return (
       <section className='section' id="projects">
            <div className='container'>
                <h2 className='project'>Project</h2>
                <div className='lists'>
                    <div className='listItem'>
                        <img className='projectimg' src={require('../assests/twitter.png')} alt='twitter'/>
                        <div className='listItemDesc'>
                            <h2>Twitter Viewer</h2>
                            <p>Project desc</p>
                            <div>
                                <ul className='links'>
                                    <li className='link'>
                                        <a href="https://twiburger.xyz/">
                                            <FontAwesomeIcon icon={faLink} size='2xl'/> 
                                        </a>                                   
                                    </li>
                                    <li className='link'>  
                                        <a href="https://github.com/bloodteller123/Twitter_Helper">
                                            <FontAwesomeIcon icon={faGithub} size="2xl" /> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='listItem'>
                        <img className='projectimg' src={require('../assests/lens-project.png')} alt='lens'/>
                        <div className='listItemDesc'>
                            <h2>Lenster account statistics</h2>
                            <p>Project desc</p>
                            <div>
                                <ul className='links'>
                                    <li className='link'>
                                        <a href="https://www.lens-react.xyz/">
                                            <FontAwesomeIcon icon={faLink} size='2xl'/> 
                                        </a>                                   
                                    </li>
                                    <li className='link'>  
                                        <a href="https://github.com/bloodteller123/Lens">
                                            <FontAwesomeIcon icon={faGithub} size="2xl" /> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Project