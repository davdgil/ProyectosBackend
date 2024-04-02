
const dbConnect = require('./config/mongo')
const express = require("express")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./docs/swagger");

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("servidor escuchando en el puerto: " + port);
})

dbConnect()

app.use("/api", require("./routes"))

app.use(express.static("storage"))