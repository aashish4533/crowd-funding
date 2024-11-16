const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Sequelize instance
const sequelize = new Sequelize('crowdfunding_db', 'root', 'fast', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define a model (for example, Project)
const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  goal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  raisedAmount: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
});

// Sync the models
sequelize
  .sync({ force: false }) // force: true will drop and recreate the tables
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
