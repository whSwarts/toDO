const express = require('express');
const app = express();
const path = require('path');

// add the css and image source
app.use(express.static(__dirname+"/assets"));

//post the html template file
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + "/template/index.html"));
});

// start the app
app.listen(8080, () => console.log('Listening on port 8080'));