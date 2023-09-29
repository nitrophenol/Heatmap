const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    SERVER_PORT: process.env.SERVER_PORT || '',
    DB_DATABASE: process.env.DB_DATABASE || '',
    DB_USER: process.env.DB_USER || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_HOST: process.env.DB_HOST || '',
    DB_PORT: process.env.DB_PORT || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
};
