import React, { useState, useEffect } from "react";
import "../css/Notification.scss";



const Notification = ({setShow, response}) =>{
    console.log("dasasdasdasda", response)
    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 2500);

        return ()=>{
            clearTimeout(timeId)
        }
    }, [])
    return (
        <>
            <div className={`noti-container ${response.success? 'success-container' : 'error-container'}`}>
                <div>
                    <div className="info-container">
                        <div>
                            <p className='title'>{response.message}</p>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Notification