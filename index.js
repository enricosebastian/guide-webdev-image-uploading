const express = require('express');
const app = express();

const mysql = require('mysql');
const fileUpload = require('express-fileupload');

const {initializeApp} = require('firebase/app');
const {getStorage, deleteObject, getDownloadURL, ref, uploadBytes, uploadString} = require('firebase/storage');

const port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(fileUpload());
app.use(express.static('public'));


//MySQL connection details
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b3e437de1af444',
    password: '07c48063',
    database: 'heroku_5eab90036437205'
});

app.get('/',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log('MySQL server connection established!');
        
        connection.query('SELECT * FROM users',(err,rows)=>{
            connection.release(); //once done, disconnect to prevent lag
            if(!err) {
                res.render('index');
            } else throw err;
        });
    });
});

app.listen(port, ()=>{
    console.log('Listening on PORT:'+port);
});
