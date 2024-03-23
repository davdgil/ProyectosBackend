const { commerceScheme } = require("../models/nosql/commerce")
const { commerceModel } = require("../models/index")
const { matchedData } = require('express-validator')

const createCommerce = async (req, res) => {

    try {
        //recogemos la informacion del body de req
        //a partir del body creamos un nuevo comercio
        const body = matchedData(req);
        //creamos un nuevo objeto a partir de body de la petición
        const data = await commerceModel.create(body);
        res.send(data)
    } catch (err) {
        handleHttpError(res, 'ERROR_GET_COMERCES')
    }

}

//obtiene un commercio por cif
const getCommerce = async (req, res) => {
    try {
        const cif = matchedData(req)
        const commerce = await commerceModel.findOne(cif)
        res.send(commerce)

    } catch (err) {
        handleHttpError(res, 'ERROR_GET_COMMERCE')
    }
}

//obtiene todos los comercios
const getCommerces = async (req, res) => {
    try {
        const data = await commerceModel.find({})
        //si obtiene true en la peticion ordena segun su cif
        if(req.query.sort === "true"){

            data.sort((a,b) => a.cif.localeCompare(b.cif))  
        }

        res.send({data})
    }catch(err){
        handleHttpError(res, 'ERROR_GET_COMMERCES')
    }
    
}

//actualiza el comercio segun el cif proporcionado
const updateCommerce = async (req, res) => {
    
    try {

        const { cif, ...body } = matchedData(req) //Extrae el cif y el resto lo asigna a la constante body
        const data = await commerceModel.findOneAndUpdate({ cif: cif }, body);
        console.log("datos actualizados")
        res.send(data)
    } catch (err) {

        handleHttpError(res, 'ERROR_UPDATE_COMMERCE')
    }
}

//borra comercios
const deleteCommerce = async (req, res) => {
    try {
        const { cif } = matchedData(req)
        //segun que pille en la request hara un soft delete o un borrado logico
        if (req.query.soft === "true") {
            //soft delete,  el registro no se elimina fisicamente de la BD
            const data = await commerceModel.delete({ cif: cif });
            console.log("1")
            res.send(data)
        } else {
            //borrado fisico, el registro se elimina completamente de la BD
            const data = await commerceModel.findOneAndDelete({ cif: cif })
            console.log("2")
            res.send(data)
        }

    } catch (err) {
        handleHttpError(res, 'ERROR_DELETE_COMMERCE')
    }
}

module.exports = {
    createCommerce,
    getCommerce,
    getCommerces,
    deleteCommerce,
    updateCommerce
}
