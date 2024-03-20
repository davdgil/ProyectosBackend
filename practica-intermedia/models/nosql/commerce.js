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
                    //compruba que el primer caracter sea una letra seguido de 7 digitos
                    //y el ultimo valor que sea o un numero o una letra
                    const cifRegex = /^[ABCDEFGHJKLMNPQRSUVW]\d{7}[0-9A-J]$/;
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