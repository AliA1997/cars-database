require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const ctrl = require('./controller');
const PORT = 10000;
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
});

app.get('/api/cars', ctrl.readCars);

app.get('/api/cars/:id', ctrl.readCar);

app.post('/api/cars', ctrl.createCar);

app.put('/api/cars/:id', ctrl.updateCar);

app.delete('/api/cars/:id', ctrl.deleteCar);

app.listen(PORT, () => console.log('Listening on Port:', PORT));