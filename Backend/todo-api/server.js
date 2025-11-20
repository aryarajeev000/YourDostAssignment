const express = require('express');
const cors = require('cors');

const todoRoutes = require('./src/routes/todoRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'To-Do API is running with local JSON database' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
