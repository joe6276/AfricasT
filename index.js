const express= require('express')
require('dotenv').config()

const app= express()






const credentials = {
    apiKey:process.env.API ,   
    username:process.env.USERNAME    
};
const Africastalking = require('africastalking')(credentials);

const sms = Africastalking.SMS
const options = {
    to: ['+254712584549'],
    message: "I'm a lumberjack and its ok, I work all night and sleep all day"
}


sms.send(options)
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.log(error);
    });


    app.listen(4000,()=>{
        console.log("Running on Port 4000")
    })