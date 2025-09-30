// init-db.js
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
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(10),
    session_id VARCHAR(255),
    courses_of_interest TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createTable = async () => {
  try {
    await pool.query(createTableQuery); // düzeltildi
    console.log(" Users tablosu başarıyla oluşturuldu ya da zaten mevcut.");
  } catch (error) {
    console.error(" Tablo oluşturulurken hata oluştu:", error);
  }
};

module.exports = {
  createTable,
  pool,
};
