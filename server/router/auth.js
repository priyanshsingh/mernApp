const express = require('express')
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req,res) => {
    res.send('Hello World from router.js');
});

router.post('/register', (req, res) => {
    const{name, email , phone, work, password, cpassword} = req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error:"Please fill the properties properly!"});
    }        
    
    User.findOne({email:email})
        .then((userExists) => {
            if(userExists) {
                return res.status(422).json({error: "Email already exists!"});
            }

            const user = new User({name, email, phone, work, password, cpassword});

            user.save().then(() => {
                res.status(201).json({message: "User successfully registered!"});
            }).catch((err) => res.sendStatus(500).json({error:"Failed to register!"}));


        }).catch(err => { console.log(err); }); 
});

module.exports = router;