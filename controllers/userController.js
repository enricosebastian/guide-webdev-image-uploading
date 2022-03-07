const pool = require('./db');

const userController = {
    getUsers: (req,res)=>{
        pool.getConnection((err,connection)=>{
            if(!err) {
                connection.query('SELECT * FROM users',(err,rows)=>{
                    if(!err) {
                        console.log('Succesful request of '+req.path);
                        res.send({rows});
                    } else throw err;
                });
            } else throw err;
        })
    },

    getUser: (req,res)=>{
        //req.params.[URL USED] to access info of interest
        pool.getConnection((err,connection)=>{
            if(!err) {
                connection.query('SELECT * FROM users WHERE username = ?',[req.params.username],(err,rows)=>{
                    if(!err) {
                        console.log('Succesful request of '+req.path);
                        res.render('profile',{rows});
                    } else throw err;
                });
            } else throw err;
        })
    }
};

module.exports = userController;