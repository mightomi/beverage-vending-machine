const { v4: uuidv4 } = require('uuid');
const {MIN_INGREDIENTS_QUANTITY_REQUIRED} = require("../config");

class Inventory {

    constructor(availableIngredients) {
        this.inventoryId = uuidv4();
        this.availableIngredients = availableIngredients;
        /*
        this.availableIngredients = {
            water: 10,
            coffee: 10,
            milk: 10,
            sugar: 10
        }
        */
    }

    canBeDispensed = (requiredIngredients) => {

        for(let ingredient in requiredIngredients) {
            let quantityRequired = requiredIngredients[ingredient];
            if(this.availableIngredients[ingredient] === undefined || this.availableIngredients[ingredient] < quantityRequired) {
                return false;
            }
        }

        return true;
    }

    dispenseBeverage = (requiredIngredients) => {
        
        for(let ingredient in requiredIngredients) {
            let quantityRequired = requiredIngredients[ingredient];
            this.availableIngredients[ingredient] -= quantityRequired;
        }
        console.log("updated invntory is", this.availableIngredients);

        this.checkIfLowOnIngredients();
    }

    topUpIngredients = (addOnIngredients) => {

        for(let ingredient in addOnIngredients) {
            let quantityToBeAdded = addOnIngredients[ingredient];

            if(this.availableIngredients[ingredient] === undefined) { // if it is a new ingredient
                this.availableIngredients[ingredient] = quantityToBeAdded;
            }
            else {
                this.availableIngredients[ingredient] += quantityToBeAdded;
            }
        }
        console.log("topUpIngredients success", this.availableIngredients);
    }

    getAvailableIngredients = () => {
        return this.availableIngredients;
    }

    checkIfLowOnIngredients = () => {

        let ingredientWhichAreLow = [];

        let availableIngredients = this.availableIngredients;
        for(let ingredient in availableIngredients) {
            let quantity = availableIngredients[ingredient];
            if(quantity < MIN_INGREDIENTS_QUANTITY_REQUIRED) {
                ingredientWhichAreLow.push(ingredient);
            }
        }

        if(ingredientWhichAreLow.length) { // if one or more ingredients is running low
            this.notifyStaff(ingredientWhichAreLow);
        }
    }

    notifyStaff = (ingredientWhichAreLow) => {
        console.log("Following ingredients are running low, please top up inventory: ");
        console.log(ingredientWhichAreLow);
    }
}

module.exports = Inventory;