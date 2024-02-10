const express = require('express');
const path = require('path');


const app = express();
const _dirname = path.resolve();

app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
});
app.get("/styles/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","style.css"));
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening at http:127.0.0.1:${port}`);
    }
})