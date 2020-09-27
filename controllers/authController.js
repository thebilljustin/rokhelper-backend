const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = (req, res) => {
    // will encrypt the password
    
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if (err) {
            res.json({
                error: err,
                haha: req
            })
        }

        let user = new User({
            email: req.body.email,
            password: hashedPass
        })
    
        user.save().then(result => res.json({ 'message': 'Your account has been registered. You can now login.'}))
             .catch(err => console.log(err))
    })
}

const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({
        $or: [{email:email}]
    }).then( user => {
        bcrypt.compare(password, user.password, function(err, result) {
            if (result) {
                // let token = jwt.sign({email: user.email}, 'verySecretValue', {expiresIn: '1h'})
                // res.redirect('/lyceum')
            }
        })
    })
}


module.exports= {
    register, login
}