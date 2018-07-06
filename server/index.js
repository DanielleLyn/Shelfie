const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log('conected')
    app.set('db', dbInstance);
}).catch(error=>{
    console.log('----error', error);
});

app.get('/api/inventory', controller.getAll);

app.listen(3000, ()=>{
    console.log('server is listening on port 3000'  );  
});

