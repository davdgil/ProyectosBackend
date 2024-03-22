const { check, matchedData } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateCommerce = [
    check("commerceName").exists().notEmpty(),
    check("cif").exists().notEmpty(),
    check("adress").exists().notEmpty(),
    check("email").exists().notEmpty(),
    check("phone").exists().notEmpty(),
   

    (req, res, next) => {
        
        return validateResults(req, res, next)
    }
];

const validatorGetCommerce = [

    (req, res, next) => {
        return validateResults(req, res, next)
    }
]



module.exports = { validatorCreateCommerce, validatorGetCommerce };
