const express = require('express');
const cors = require('cors');

const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller');

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

const baseEndPoint = '/api/houses';

app.get(baseEndPoint, getHouses);
app.post(baseEndPoint, createHouse);
app.put(baseEndPoint+'/:id', updateHouse);
app.delete(baseEndPoint+'/:id', deleteHouse);

const SERVER_PORT = 4040;
app.listen(SERVER_PORT, () => console.log(`Docked at port ${SERVER_PORT}`));