const { readDB, writeDB, generateId } = require('../utils/fileHandler');

// GET /todos
const getTodos = (req, res) => {
  const todos = readDB();
  res.status(200).json(todos);
};

// POST /todos
const createTodo = (req, res) => {
  const { title, completed } = req.body;

  // Validation
  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: "Title is required and must be a non-empty string" });
  }

  const todos = readDB();

  const newTodo = {
    id: generateId(),
    title: title.trim(),
    completed: completed ?? false,
    createdAt: new Date(),
  };

  todos.push(newTodo);
  writeDB(todos);

  res.status(201).json(newTodo);
};

// PUT /todos/:id
const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todos = readDB();
  const index = todos.findIndex(todo => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  // Validation (optional but good)
  if (title !== undefined) {
    if (typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({ error: "Title must be a non-empty string" });
    }
    todos[index].title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res.status(400).json({ error: "Completed must be boolean" });
    }
    todos[index].completed = completed;
  }

  todos[index].updatedAt = new Date();

  writeDB(todos);
  res.status(200).json(todos[index]);
};

// DELETE /todos/:id
const deleteTodo = (req, res) => {
  const { id } = req.params;

  const todos = readDB();
  const updated = todos.filter(todo => todo.id !== id);

  if (updated.length === todos.length) {
    return res.status(404).json({ error: "Todo not found" });
  }

  writeDB(updated);

  res.status(200).json({ message: "Todo deleted successfully" });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
