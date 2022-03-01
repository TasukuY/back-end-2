const houses = require('./db.json');
let globalID = 4;

//selecting what to export
module.exports = {
    getHouses: (req, res) => {
        //get
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        //post
        //console.log(req.body);
        let newHouse = req.body;
        newHouse.id = globalID
        console.log(newHouse);
        houses.push(newHouse);
        res.status(200).send(houses);
        globalID++;
    },
    updateHouse: (req, res) => {
        //put
        //console.log(req.body, req.params);
        let {id} = req.params;
        let {type} = req.body;
        let index = houses.findIndex(house => +house.id === +id);
        // console.log(index);
        if(houses[index].price === 0 && type === 'minus'){
            res.status(400).send('Cannot go below 0');
        }else if(type === 'plus'){
            houses[index].price += 10000;
            res.status(200).send(houses);
        }else if(type === 'minus'){
            houses[index].price -= 10000;
            res.status(200).send(houses);
        }else{
            res.sendStatus(400);
        }   
    },
    deleteHouse: (req, res) => {
        //delete
        let id = req.params.id;
        let index = houses.findIndex(house => +house.id === +id);
        houses.splice(index, 1);
        res.status(200).send(houses);
    }
}