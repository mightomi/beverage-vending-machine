const dotEnv  = require("dotenv");

dotEnv.config();


module.exports = {

    PORT: process.env.PORT,
    MIN_INGREDIENTS_QUANTITY_REQUIRED: process.env.MIN_INGREDIENTS_QUANTITY_REQUIRED
}