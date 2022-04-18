const dotEnv  = require("dotenv");

dotEnv.config();


module.exports = {

    PORT: process.env.PORT,
    DB_URL: `${process.env.MONGODB_URL}/${process.env.COLLECTION_NAME}`,
    MIN_INGREDIENTS_REQUIRED: process.env.MIN_INGREDIENTS_REQUIRED
}