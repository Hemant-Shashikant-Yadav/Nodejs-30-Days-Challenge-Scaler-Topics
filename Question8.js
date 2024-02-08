const express = require('express');
const app = express();

function positiveIntegerHandler(req, res) {
    try {
        const number = Number.parseInt(req.query.number);
        if (number >= 0) {
            return res.status(200).send("SUCCESS: Positive Number provided!");
        } else {
            throw new Error("FAILURE: Negative Number provided")
        }
    } catch(err) {
        throw new Error("FAILURE: Invalid input provided")
    }
}

function errorHandler(err, req, res, next) {
    return res.status(400).send(err.message);
}

app.get('/positive', positiveIntegerHandler);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://127.0.0.1:${port}`);
})