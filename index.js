const express    = require('express');
const app        = express();
const routes     = require('./routes/routes');

const dotenv     = require('dotenv').config(); //security-related
const port       = process.env.PORT;

app.set('view engine','ejs');

app.use(express.static('public'));

app.use('/', routes);

app.listen(port, ()=>{
    console.log('Listening on PORT:'+port);
});
