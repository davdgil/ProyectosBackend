const mongoose = require("mongoose")

const commerceScheme = new mongoose.Schema(
    {
        commerceName: {
            type: String,
            unique: true
        },

        cif: {
            type: String,
            unique: true,
            validate: {
                validator: (req) => {
                    //le pasamos una regla que debera testear con la funcion test, en la que
                    //comprueba que los 8 primeros digitos son numeros y el ultimo valor es una letra
                    const cifRegex = /^\d{8}[A-Za-z]$/;
                    return cifRegex.test(req);
                },
                //si la validacion no se cumple salta este mensaje de error
                message: "ERROR_CIF_FORMAT"
            }
        },

        adress: {
            type: String
        },

        email: {
            type: String
        },

        phone: {
            type: String,
            maxlength: 9
        },

        id: {
            //mongoose se encarga de definir un ID unico cada vez que se crea un comercio
            type: mongoose.Types.ObjectId
        }

    }
);

module.exports = mongoose.model("commerce", commerceScheme)