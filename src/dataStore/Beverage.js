class Beverage {

    constructor(name, requiredIngredients) {
        this.name = name;
        this.requiredIngredients = requiredIngredients;
    }

    getRequiredIngredients = () => {
        return this.requiredIngredients;
    }
}

module.exports = Beverage;