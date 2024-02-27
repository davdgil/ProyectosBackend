const { tracksModel } = require('../models')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')

const getItems = async (req, res) => {

    try {
        const data = await tracksModel.find({})
        res.send(data)
    } catch (err) {
        handleHttpError(res, 'ERROR_GET_ITEMS', 403)
    }

}
const createItem = async (req, res) => {
    try {
        const { body } = matchedData(req) // el dato filtrado por el modelo (probar con body = req)
        const data = await
            tracksModel.create(body)
        res.send(data)
    } catch (err) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }

}


const getItem = async (req, res) => {

    try {
        const { id } = matchedData(req)
        console.log(id)
        const track = await tracksModel.findById(id)
        if (!track) {
            throw err;
        }
        res.send(track)

    } catch (err) {
        handleHttpError(res, 'ERROR_GET_ITEM', 404)
    }

}

const updateItem = async(req, res) => {
    try {
        const { id, ...body } = matchedData(req); // Extrae el id y el resto lo asigna a la constante body
        const data = await tracksModel.findOneAndUpdate(id, body);
        res.send(data)
    } catch (err) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
}

const deleteItem = (req, res) => {

}

module.exports = {
    getItems, getItem, createItem, updateItem, deleteItem
};

