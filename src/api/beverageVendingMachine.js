const beverageVendingMachine = require("../apiServices/beverageVendingMachine.js");


module.exports = (app) => {


    /**
     * @swagger
     * /beverages:
     *   get:
     *     summary: Get all the beverages name and if it can be dispensed
     *     description: Get all the beverages name and if it can be dispensed
     *     responses:
     *       '200':
     *          description: object of all the beverages and if it can be dispensed
     */
    app.get("/beverages", async (req, res, next) => {
        console.log("got allBeverage request");

        const { data } = await beverageVendingMachine.allBeverage();
        if(data.success) {
            return res.json(data);
        }
        else {
            return res.status(400).send(data);
        }
    });


     /**
     * @swagger
     * /orderBeverage:
     *   post:
     *     summary: Order a beverage
     *     description: Order a beverage
     *     
     *     requestBody:
     *       description: JSON input
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               beverageName:
     *                 type: string
     *                 default: Black Coffee
     *                 description: The name of the beverage the user wants to order
     *     responses:
     *       200:
     *        description: Responce JSON object
     *       400:
     *        description: Error message if the order wasnt able to be dispensed
    */
    app.post("/orderBeverage", async (req, res, next) => {

        const { beverageName } = req.body;
        const { data } = await beverageVendingMachine.orderBeverage(beverageName);
        
        if(data.success) {
            return res.json(data);
        }
        else {
            return res.status(400).send(data);
        }

    });



     /**
     * @swagger
     * /topUpIngredients:
     *   post:
     *     summary: TopUp ingredients
     *     description: Add ingredients to the inventory
     *     
     *     requestBody:
     *       description: JSON input
     *       required: true
     *       content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                    water: 
     *                      type: integer
     *                    coffee: 
     *                      type: integer
     *                    milk: 
     *                      type: integer
     *                    sugar: 
     *                      type: integer
     *     responses:
     *       200:
     *        description: The inventory topUp was success
    */
      app.post("/topUpIngredients", async (req, res, next) => {
        try {
            const ingredients = req.body;
            console.log(ingredients);
            const { data } = await beverageVendingMachine.topUpIngredients(ingredients);
            return res.json(data);
        } catch (err) {
            next(err);
        }
    });


};
