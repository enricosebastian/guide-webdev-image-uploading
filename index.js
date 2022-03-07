const express = require('express');
const app = express();
const dotenv = require('dotenv').config(); //security-related

const mysql = require('mysql');
const fileUpload = require('express-fileupload');

const {initializeApp} = require('firebase/app');
const {getStorage, deleteObject, getDownloadURL, ref, uploadBytes, uploadString} = require('firebase/storage');

const port = process.env.PORT;

app.set('view engine','ejs');

app.use(fileUpload());
app.use(express.static('public'));


//MySQL connection details
const pool = require('./controllers/db').pool;

app.get('/',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log('MySQL server connection established!');
        
        connection.query('SELECT * FROM users',(err,rows)=>{
            connection.release(); //once done, disconnect to prevent lag
            if(!err) {
                res.render('index',{rows});
            } else throw err;
        });
    });
});

app.listen(port, ()=>{
    console.log('Listening on PORT:'+port);
});
