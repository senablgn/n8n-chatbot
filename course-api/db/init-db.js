const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS courses (
        id SERIAL PRIMARY KEY,
        course_name VARCHAR(255),
        contact_email VARCHAR(255),
        contact_phone_number VARCHAR(255),
        branch_city VARCHAR(255)
    );
`;
const createTable = async () => {
    try {
        await pool.query(createTableQuery);
        console.log("Courses tablosu başarıyla oluşturuldu ya da zaten mevcut.");
    } catch (error) {
        console.error("Courses tablosu oluşturulurken hata oluştu:", error);
    }
};
module.exports = {  
    createTable,
    pool,
};
