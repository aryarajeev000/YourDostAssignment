const fs = require('fs');
const path = require('path');

// Path to the local database file
const DB_PATH = path.join(__dirname, '../../todos.json');

// Read JSON file
const readDB = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading DB file:", err);
    return [];
  }
};

// Write JSON file
const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing DB file:", err);
  }
};

// Generate unique ID (local)
const generateId = () => {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
};

module.exports = {
  readDB,
  writeDB,
  generateId,
};
