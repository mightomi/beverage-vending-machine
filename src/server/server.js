const { PORT } = require("../config")

const express = require("express");
const cors = require("cors");

// const database = require("../database/database");
const { beverageVendingMachine } = require("../api");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

console.log("port is ", PORT);

// init everything
const start = () => {

    const app = express();
    app.use(cors());
    app.use(express.json());

    // database.init();

    // listen to user API
    beverageVendingMachine(app);


    // swagger config
    const swaggerOptions = {
        swaggerDefinition: {
            openapi: '3.0.0',
            info: {
                version: "1.0.0",
                title: "beverage Vending Machine API docs",
                description: "beverageVendingMachine API Information",
                contact: {
                    name: "swaastick"
                },
            }
        },
        apis: ["./src/api/beverageVendingMachine.js"]
    };
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


    const server = app.listen(PORT, () => {
        console.log(`content listening on port ${PORT}`);
    });
}


module.exports = {
    start
}