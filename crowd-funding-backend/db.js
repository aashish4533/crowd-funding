const mysql = require('mysql2');

// Create a global database connection instance
const db = mysql.createConnection({
    host: 'localhost',         
    user: 'root',             
    password: 'fast',             
    database: 'crowdfunding_db'  
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Database connected successfully');
    }
});

// Export the connection instance
module.exports = db;
