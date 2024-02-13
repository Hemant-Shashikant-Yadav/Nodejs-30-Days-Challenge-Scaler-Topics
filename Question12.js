const express = require('express');
const app = express();
const rateLimitMiddleware = require('express-rate-limit')

const limiter = rateLimitMiddleware({
    windowMS: 60*10000,
    max:4,
    messege:"Too many requests",
    statusCode:429
});

app.get('/', (req, res) => {
    res.send("Welcome to the Request Rate-Limiting Middleware Problem");
})
app.use(limiter);

const port = process.env.PORT || 3000;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Listening at http:127.0.0.1:${port}`);
    }
})