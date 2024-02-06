const express = require('express');
const app = express();



app.get('/greet', (req, res) => {
    greetHandler(req, res);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening in PORT: http://127.0.0.1:${port}`);
});


function greetHandler(req, res) {
    const name = req.query.name ? req.query.name : "Guest";
    return res.send(`Hello, ${name}!`);
}