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
                <h2 className='project'>Projects</h2>
                <div className='lists'>
                <div className='listItem'>
                        <img className='projectimg' src={require('../assests/help.png')} alt='help'/>
                        <div className='listItemDesc'>
                            <h2>Help! Forum</h2>
                            <p>The objective of this project is to establish a platform for individuals impacted by a weakened macroeconomic climate. 
                            This platform enables people to express their thoughts and share strategies for overcoming the accompanying frustrations. Users have the ability to engage with posts by liking and commenting on them.</p>
                            <div>
                                <ul className='links'>
                                    <li className='link'>
                                        <a href="javascript:;">
                                            <FontAwesomeIcon icon={faLink} size='2xl'/> 
                                        </a>                                   
                                    </li>
                                    <li className='link'>  
                                        <a href="https://github.com/bloodteller123/help-forum">
                                            <FontAwesomeIcon icon={faGithub} size="2xl" /> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='listItem'>
                        <img className='projectimg' src={require('../assests/ordering.png')} alt='food'/>
                        <div className='listItemDesc'>
                            <h2>Food Ordering System</h2>
                            <p>The project enables restaurant owners to customize the menu, manage employees, and control their system access. Regular users can effortlessly navigate the system, explore the available food items
                        on the menu, and conveniently place orders</p>
                            <div>
                                <ul className='links'>
                                    <li className='link'>
                                        <a href="javascript:;">
                                            <FontAwesomeIcon icon={faLink} size='2xl'/> 
                                        </a>                                   
                                    </li>
                                    <li className='link'>  
                                        <a href="https://github.com/bloodteller123/Ordering-System">
                                            <FontAwesomeIcon icon={faGithub} size="2xl" /> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='listItem'>
                        <img className='projectimg' src={require('../assests/twitter.png')} alt='twitter'/>
                        <div className='listItemDesc'>
                            <h2>Twitter Viewer</h2>
                            <p>The web app provides similar experience as the 'Following' section in latest Twitter. It allows users to login via their Twitter
credentials, search for and follow other users, track their newest tweets, and like the tweets (No longer maintained due to new Twitter Dev policy)</p>
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
                            <p>The project can present all the statistics of a given username on Lenster platform</p>
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