const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String }, // TODO: Guardaremos el hash
    role: { type: ["user", "admin"], default: "user" } // es el enum de SQL
}, {
    timestamps: true, // TODO: createdAt, updatedAt
    versionKey: false
});

module.exports = mongoose.model("users", UserScheme); // “users” es el nombre de la colección en MongoDB (o de la tabla en SQL)
