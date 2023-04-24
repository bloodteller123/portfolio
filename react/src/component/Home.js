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
                <h1 className="fullname"><b>Zihan Chen</b></h1>
                <h3>Software Developer</h3>
            </div>
        </section>
    )
}

export default Home