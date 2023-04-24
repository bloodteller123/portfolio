import {React} from 'react'


import "../css/Header.scss"


const Header = () =>{
    
    return (
        <nav className='header'>
            <a className='name' href="#home">Zihan Chen</a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#exp">Experiences</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header