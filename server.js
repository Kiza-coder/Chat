const express = require('express');
const http = require("http");
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
const server = http.createServer(app)
const port = process.env.PORT || 5000;


const messages = [];
messages.push({
    arbre : "secoya",
    voitire : "mazda",
    biere : "Duvel"
})
//MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/message',(req,res) => {
    const message = req.body;
    console.log(message)
    messages.push(message)
})

app.get('/message' ,(req,res) => {
    res.send(messages);
})

server.listen(port, () => console.log(`Server is running on port ${port}`));
