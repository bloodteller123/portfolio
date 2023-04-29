import {React, useEffect, useState} from 'react'
import Api from '../Api'
import Notification from './Notification'
import '../css/Contact.scss'


const Contact = () =>{
    const [userContent, setUserContent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        msg: ""
    })
    const [show, setShow] = useState(false)
    const [res, setRes] = useState({})
    const submit = async (e) =>{
        e.preventDefault();
        if(Object.values(userContent).some((v) => v.length===0)) return

        const response = await Api.post('/redirect',{
            ...userContent
        })
        setUserContent({
            firstName: "",
            lastName: "",
            email: "",
            msg: ""
        })
        console.log(response)
        setRes(response.data)
        
    }
    useEffect(()=>{
        console.log(res)
        if(Object.keys(res).length !== 0){
            setShow(true)
        }
    }, [res])

    const handleInput = (e) =>{
        setUserContent(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
        console.log(userContent)
    }

    return (
    <section className='section' id='contact'>
        <div className='container'>
            <h2 className='contact'>Contact</h2>
            {show?<Notification setShow={setShow} response={res} />:<></>}
            <div className='form'>
                <form onSubmit={submit}>
                    <div className='formelement'>
                        {/* <label>First Name</label> */}
                        <input className='input'
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                            value={userContent.firstName}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='formelement'>
                        {/* <label>Last Name</label> */}
                        <input className='input'
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            value={userContent.lastName}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='formelement'>
                        {/* <label>Email</label> */}
                        <input className='input'
                            type='text'
                            name='email'
                            placeholder='Email'
                            value={userContent.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='formelement'>
                        {/* <label>Message</label> */}
                        <textarea className='input'
                            name='msg'
                            placeholder='Message'
                            value={userContent.msg}
                            onChange={handleInput}
                        />
                    </div>
                    <input type='submit' value="Submit" className="submit"/>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact