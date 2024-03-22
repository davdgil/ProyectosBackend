const { commerceScheme } = require("../models/nosql/commerce")
const { commerceModel } = require("../models/index")
const { matchedData } = require('express-validator')

const createCommerce = async (req, res) => {
    
    try {
        //recogemos la informa del body de req
        //a partir del body creamos un nuevo comercio
        const { body } = matchedData(req);
        //creamos un nuevo objeto a partir de body de la petición
        const data = await commerceModel.create(body);
        res.send(data)
    } catch (err) {
        console.log(err)
    }

}
const getCommerce = async (req, res) => {
    try {
        const { cif } = req.params
        console.log(cif)
        const commerce = await commerceModel.findOne( {cif} )
        res.send(commerce)

    } catch (err) {
        console.log(err)
    }
}
const getCommerces = async (req, res) => {
    const data = await commerceModel.find({})
    res.send(data)
}
const updateCommerce = async (req, res) => {
    try {
        const { cif } = req.params
        const { ...body } = req // Extrae el cif y el resto lo asigna a la constante body
        console.log(cif, body)
        //busca el cif, y actualiza el body
        const data = await commerceModel.findOneAndUpdate({ cif }, body);
        res.send(data)
    } catch (err) {
       // handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
}
const deleteCommerce = async (req, res) => {
    
}

module.exports = {
    createCommerce,
    getCommerce,
    getCommerces,
    deleteCommerce,
    updateCommerce
}
