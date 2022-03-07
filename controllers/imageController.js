const pool = require('./db');
const fileUpload = require('express-fileupload');
const {getStorage, deleteObject, getDownloadURL, ref, uploadBytes, uploadString} = require('firebase/storage');
const storage = require('./firebase');


const imageController = {
    uploadImg: (req, res)=>{
        var imgfile;
        var uploadPath;

        if(!req.files || Object.keys(req.files)==0) {
            return res.status(400).send('No files were uploaded...');
        }

        imgfile = req.files.imgfile; //places file data into this variable
        const folderRef = ref(storage, 'profile_image'); //firebase folder name is "images"
        const imageRef = ref(storage,'profile_image/'+req.body.username+'.png'); //this is a hack; embedded the username in the form as a hidden input

        uploadBytes(imageRef, imgfile.data).then((snapshot)=>{
            console.log('Image upload was succesful.');
            getDownloadURL(imageRef).then((url)=>{
                pool.getConnection((err,connection)=>{
                    if(!err) {
                        connection.query('UPDATE users SET profile_image = ? WHERE username= ?',[url, req.body.username],(err,rows)=>{
                            connection.release();
                            if(err) throw err;
                            else if(!err) {
                                res.redirect('back');
                            }
                        });
                    } else throw err;
                });
            }).catch((err)=>{
                console.log(err);
            });
        });
    }
};

module.exports = imageController;