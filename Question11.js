const express = require('express');

const app = express();

const authenticationMiddleware = require('./authQ11')
app.get("/",(req,res)=>{
    res.send("Public page Day 11: 30 days NodeJs");
});
app.get("/protected",authenticationMiddleware,(req,res)=>{
    res.send("Protected page");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://127.0.0.1:${port}`);
})