import  {React, useState, useEffect, useCallback} from "react";

import Card from "./Card";

import '../css/Experience.scss';
// import 'semantic-ui-css/semantic.min.css'

const Experience = () =>{

    let ford = {
        company_name: 'Ford Motor Company',
        role: 'Software Developer Intern',
        skills: ['C++', "Google Testing Framework"],
        tasks: ["Wrote C++ tests with Google testing framework to increase test coverage to 80%", "updated legacy APIs"],
        date: ["May 2020", "Aug 2020"],
        imagename: "ford.jpeg"
    }
    let ibm = {
        company_name: 'IBM Canada',
        role: 'Software Developer Intern',
        skills: ['Java', "Python"],
        tasks: ["Implmented a automated Java pipeline to perform tasks", "Several defect fixings"],
        date: ["Sept 2019", "Dec 2019"],
        imagename: "ibm.png"
    }
    let mitel = {
        company_name: 'Mitel Networks',
        role: 'Software Developer Intern',
        skills: ['Java', "JavaFX", "typescript"],
        tasks: ["Assisted in chat microservice in Java", "Built a JavaFX application"],
        date: ["Jan 2019", "Apr 2019"],
        imagename: "mitel.png"
    }
    // https://freefrontend.com/css-timelines/
    return (
        <section className="section" id="exp">
            <h2 className='experience'>Experiences</h2>
            <div className="cards ">
                {/* <Card/> */}
            </div>
                <div className="timeline">

                    <div className="timeline-empty">
                    </div>

                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>
                    <div className="timeline-component timeline-content">
                        <Card {...ford}/>
                    </div>
                    <div className="timeline-component timeline-content">
                        <Card {...ibm}/>
                    </div>
                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    <div className="timeline-empty">
                    </div>

                    <div className="timeline-empty">
                    </div>

                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>
                <div className=" timeline-component timeline-content">
                    <Card {...mitel}/>
            </div>

        </div>
    
        </section>
    )
}

export default Experience