import  {React, useState, useEffect, useCallback} from "react";



import '../css/Home.scss';
// import 'semantic-ui-css/semantic.min.css'

const Home = () =>{
    return (
        <section className="section" id="home">
            {/* <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id= "title">asdasdasd</div> */}
            <div className="intro">
            <div className="myname">
                <h1 className="fullname">Hi! I'm <b>Zihan Chen</b></h1>
                </div>
                <h3>Software Developer</h3>
                <li className="resume"><a href="/ZihanChen_Resume.pdf" target="_blank">Resume</a></li>
            </div>
        </section>
    )
}

export default Home