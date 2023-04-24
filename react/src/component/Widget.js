import {React} from 'react'

import "../css/Widget.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Widget = () =>{
    return (
        <ul className='widget'>
            <li>
                <a href="https://www.linkedin.com/in/zihan-chen-bb3049154/">
                <FontAwesomeIcon icon={faLinkedin} fade size = "2xl" style={{color: "#005af5",}} />
                </a>
            </li>
            <li>
                <a href="https://github.com/bloodteller123">
                    <FontAwesomeIcon icon={faGithub} fade size="2xl" /> 
                </a>
            </li>
        </ul>
    )
}

export default Widget

{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}