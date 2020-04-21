const express = require('express');
const app = express();

//Database
require('./db');

//Cors
const cors = require('cors');

//Json format
app.use(express.json());
app.use(cors());

//API
app.use('/api', require('./routes/index'));

//Server
app.listen(4000, () => { console.log('App listen on port 4000.') })