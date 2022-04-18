const Beverage = require("./Beverage");

class Beverages {

    constructor() {
        this.allBeverages = {};
        /*
        this.allBeverages = {
            'Black Coffee': <object of Beverage>,
        }
        */
        this.addDefaultBeverages();
    }

    addBeverage = (name, resourceRequired) => {
        this.allBeverages[name] = new Beverage(name, resourceRequired);
        console.log("Beverage added: ", name);
    }

    addDefaultBeverages = () => {
        this.addBeverage("Black Coffee", {water:3, coffee:1, sugar:1});
        this.addBeverage("Black Coffee Without Sugar", {water:3, coffee:1});
        this.addBeverage("Milk Coffee", {water:1, coffee:1, milk:1, sugar:1});
        this.addBeverage("Milk Coffee Without Sugar", {water:1, coffee:1, milk:1});
    }

    getAllBeverages = () => {
        return this.allBeverages;
    }

    getRequiredIngredients = (name) => {

        if(this.allBeverages[name] === undefined) {
            console.log("No Beverage exists with the name");
            return;
        }

        return this.allBeverages[name].getRequiredIngredients();
    }
}

module.exports = Beverages;