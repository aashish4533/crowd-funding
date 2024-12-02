// db.js
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

// Create a connection pool
const pool = new Pool({
    user: process.env.DB_USER,          // e.g., 'postgres'
    host: process.env.DB_HOST,          // e.g., 'localhost'
    database: process.env.DB_NAME,      // e.g., 'mydatabase'
    password: process.env.DB_PASSWORD,  // e.g., 'mypassword'
    port: process.env.DB_PORT          // e.g., 5432
});

// Function to check the database connection
pool.connect()
    .then(client => {
        console.log("Connected to PostgreSQL Database");
        client.release(); // Release the client back to the pool
    })
    .catch(err => {
        console.error("Database connection error:", err.stack);
    });

// Export the pool to use in other files
module.exports = pool;
