//importing modules
const {Sequelize, DataTypes} = require('sequelize');

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5432
//database name is system-login
const sequelize = new Sequelize(`postgres://postgres:123456@localhost:5432/system-login`, {dialect: 'postgres'});

//checking if connection is done
sequelize.authenticate()
    .then(() => {
        console.log(`Database connected to system-login`);
    })
    .catch((err) => {
        console.log('Error connecting database, ', err);
    });

    const db = {};  
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    //connecting to model
    db.users = require('./userModel') (sequelize, DataTypes);

    module.exports = db;