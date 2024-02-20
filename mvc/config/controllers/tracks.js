const { tracksModel } = require('../models');

const getItem = (req, res) => {
    // Implementa la lógica para obtener un único ítem
}

const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send(data);
}
/*
const createItem = async (req, res) => {
    const { body } = req;
    // console.log(body);
    const data = await tracksModel.create(body);
    res.send(data);
}
*/

const updateItem = (req, res) => {
    // Implementa la lógica para actualizar un ítem existente
}

const deleteItem = (req, res) => {
    // Implementa la lógica para eliminar un ítem
}


module.exports = { 
    getItems, 
    getItem, 
    createItem, 
    updateItem, 
    deleteItem 
};




