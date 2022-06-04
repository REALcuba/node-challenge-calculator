const express = require('express');
const app = express();

app.get('http://localhost:3000/add?value1=10&value2=2', (req, res) => {
    res.send('Hello Express')
});


app.get('http://localhost:3000/substract?value1=10&value2=2', (req, res) => {
    res.send('Hello Express')
});


app.get('http://localhost:3000/multiply?value1=10&value2=2', (req, res) => {
    res.send('Hello Express')
});


app.get('http://localhost:3000/divide?value1=10&value2=2', (req, res) => {
    res.send('Hello Express')
});

app.listen(3000, () => console.log("Server is up and running"))