//importing modules
const express = require("express");
const sequelize = require('sequelize');
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

//setting the port
const PORT = process.env.PORT || 3000;

//assigning the variable app to express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({forced: true}).then(() => {
    console.log(('db has been sync'));
});

app.use('/api/users', userRoutes);

//lintening to server connection
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));