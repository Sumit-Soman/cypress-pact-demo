const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const database = {
    1: { id: 1, name: 'Test Data' },
};

app.get('/data/:id', (req, res) => {
    const data = database[req.params.id];
    if (data) {
        res.json(data);
    } else {
        res.status(404).send();
    }
});

const server = app.listen(8080, () => {
    console.log('Producer running on http://localhost:8080');
});

module.exports = { app, server };