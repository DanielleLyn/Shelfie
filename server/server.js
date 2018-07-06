const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

app.use(bodyParser.json());

const PORT = 4000;
app.listen(PORT, ()=>console.log('listening on port ${PORT}'));