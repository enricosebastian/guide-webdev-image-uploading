// const pool = require('./db').pool;

const controller = {
    getIndex: (req,res)=>{
        res.render('index');
    },

    getAbout: (req,res)=>{
        res.render('about');
    }
}

module.exports = controller;