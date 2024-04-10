const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('public'));
app.use('/message', express.static('message'));

app.get('/', (req,res) =>{
    const filePath = path.join(__dirname, 'page', 'message.html');
    res.sendFile(filePath);
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});