const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
const app = express()

app.use(bodyParser.json())
app.use(cors());


//test get method 
app.get('/',(req,res)=>{
    res.send('Hello From Node Server')
})

app.post('/register', (req,res)=>{
    //    console.log(req.body);
    //    localStorage.setItem("user", req.body)
    //    res.status(200).send({"Data": "Registered sucessfully"})
          res.status(200).send(req.body)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})


