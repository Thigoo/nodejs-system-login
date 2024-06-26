//importing modules
const express = require('express');
const db = require('../models');

//assigning db.users to User variable
const User = db.users;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
const saveUser = async (req, res, next) => {
    //search the database to see if user exist
    try {
        const usernameCheck = await User.findOne({
            where: {
                userName: req.body.userName
            }
        });

        //if username exist in the database respond with a status of 409
        if(usernameCheck) {
            return res.status(409).send('username already taken');
        }

        //checking if email already exist
        const emailCheck = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        //if email exist in the database respond with a status of 409
        if(emailCheck) {
            return res.status(409).send('Authentication failed');
        }

        next();
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    saveUser
}