const { FormateData } = require('../utils');
const {beverageVendingMachine} = require("../dataStore");

let action = {};


action.allBeverage = async () => {
    try {
        let availableBeverages = beverageVendingMachine.getAvailableBeverages();
        return FormateData({success: true, availableBeverages});
    } catch (err) {
        console.log("Error got ", err);
        return FormateData({success: false, errorMsg: err});
    }
};


action.orderBeverage = async (beverageName) => {
    try {
        const orderBeverageData = await beverageVendingMachine.orderBeverage(beverageName);
        return FormateData({success: true});
    } catch (err) {
        console.log("Error got", err);
        return FormateData({success: false, errorMsg: err});
    }
};


action.topUpIngredients = async (ingredients) => {
    try {
        const topUpIngredientData = await beverageVendingMachine.topUpIngredients(ingredients);
        return FormateData({success: true, topUpIngredientData});
    } catch (err) {
        console.log("Error ", err);
        return FormateData({success: false, errorMsg: err});
    }
};

module.exports = action;
