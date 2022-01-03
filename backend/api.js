const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');


const kitRouter = require('./routes/kits-routes');


const api = express();

api.use(cors());

api.use('/api/kits' , kitRouter);

api.listen(5000);