require("dotenv").config();
const express = require('express')
const cors = require('cors')
const { mailService,
        OAuth2Client} = require('./clients') 
const app = express()


app.use(express.json())
app.use(cors())

app.post('/api/redirect', async (req, res)=>{
    console.log(req.body);
    const mailoptons ={
        from: req.body.email,
        to: process.env.EMAIL_ADDRESS,
        subject: "Greetings",
        html:`
        <h2>Some messages from ${req.body.email}</h2>
        <div>
            <p>Hello, my name is ${req.body.firstName} ${req.body.lastName}</p>
            <br>
            <p>${req.body.msg}</p>
        </div>
        `
    }
    try {
        OAuth2Client.setCredentials({refresh_token:process.env.EMAIL_CLIENT_REFRESH})
        const accessToken = await OAuth2Client.getAccessToken()
        mailService(accessToken).sendMail(mailoptons, (err, _)=>{
            console.log("send mail")
            if(err){
                console.log(err)
                res.status(500).json({
                    success: false,
                    message: "Something went wrong, please comeback later~"
                })
            }else{
                res.status(200).json({
                    success: true,
                    message: "Thank you for contacting me, will definitely get back to you very soon~"
                })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Something went wrong, please comeback later~"
        })
    }
})


const port = 3333
app.listen(port, ()=>{console.log(`running on port ${port}`)})