const { v4: uuidv4 } = require('uuid');
const Inventory = require("./Inventory"); 
const Beverages = require("./Beverages");

class BeverageVendingMachine {

    constructor() {
        this.machineId = uuidv4();
        this.inventory = new Inventory({water:10, coffee:10, milk:10, sugar:10});
        this.beverages = new Beverages();
    }

    // displays all the available beverages which can be dispenced
    getAvailableBeverages = () => {
        let availableBeverages = {};
        
        let allBeverage = this.beverages.getAllBeverages();

        for(let beverageName in allBeverage) {
            let ingredientsRequired = allBeverage[beverageName].getRequiredIngredients();
            if(this.inventory.canBeDispensed(ingredientsRequired)) {
                availableBeverages[beverageName] = {canBeDispensed: true};
            }
            else {
                availableBeverages[beverageName] = {canBeDispensed: false};
            }
        }

        return availableBeverages;
    }


    orderBeverage = (beverageName) => {

        let allBeverage = this.beverages.getAllBeverages();
        let ingredientsRequired = allBeverage[beverageName].getRequiredIngredients();

        if(this.inventory.canBeDispensed(ingredientsRequired)) {
            this.inventory.dispenseBeverage(ingredientsRequired);
            return true;
        }
        else {
            throw "Order can't be processed not enough ingredients";
        }
        
    }


    topUpIngredients = (ingredients) => {
        this.inventory.topUpIngredients(ingredients);
    }

}

module.exports = BeverageVendingMachine;