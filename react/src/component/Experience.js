import  {React, useState, useEffect, useCallback} from "react";

import Card from "./Card";

import '../css/Experience.scss';
// import 'semantic-ui-css/semantic.min.css'

const Experience = () =>{
    return (
        <section className="section" id="exp">
            <h2 className='experience'>Experiences</h2>
            <div className="cards ">
                {/* <Card/> */}
            </div>
                <div class="timeline">

                    <div class="timeline-empty">
                    </div>

                <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                </div>
                    <div class="timeline-component timeline-content">
                        <Card/>
                    </div>
                    <div class="timeline-component timeline-content">
                        <Card/>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty">
                    </div>

                    <div class="timeline-empty">
                    </div>

                <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                </div>
                <div class=" timeline-component timeline-content">
                    <Card/>
            </div>

        </div>
    
        </section>
    )
}

export default Experience