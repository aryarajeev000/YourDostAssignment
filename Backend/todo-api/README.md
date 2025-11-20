#📌 To-Do CRUD API (Node.js + Express + Local JSON Database)

This is a simple To-Do CRUD API built using Node.js and Express, where all data is stored inside a local JSON file (todos.json).
No external database (MongoDB / SQL) is used, making it perfect for small projects, assignments, and demonstrations.

##The API supports full CRUD functionality:

Create a To-Do

Get all To-Dos

Update a To-Do

Delete a To-Do

Data is stored in a JSON file and handled using the Node.js fs module.

##🚀 Features

Full CRUD operations (GET, POST, PUT, DELETE)

Local JSON file (todos.json) acts as the database

Auto-generated IDs for To-Dos

Validation for title & completed fields

Clean controller + utils structure

Easy to deploy and test

No database setup required

##📁 Project Structure
todo-api/
│
├── todos.json
├── package.json
├── server.js
│
└── src/
    ├── controllers/
    │    └── todoController.js
    │
    ├── routes/
    │    └── todoRoutes.js
    │
    └── utils/
         └── fileHandler.js

##⚙️ Setup Instructions
###1️⃣ Install dependencies
npm install

###2️⃣ Ensure todos.json exists in project root

todos.json must contain:

[]

###3️⃣ Start the server
npm run dev


or

npm start

###4️⃣ Server will run on:
http://localhost:5000

📌 API Endpoints
✔ GET all todos
GET /todos


Response:

[
  {
    "id": "1700012345678",
    "title": "Learn Node.js",
    "completed": false,
    "createdAt": "2025-01-01T10:00:00.000Z"
  }
]

###✔ Create a new todo
POST /todos

Body (JSON):
{
  "title": "Learn Express.js",
  "completed": false
}

Response:
{
  "id": "1700012345678",
  "title": "Learn Express.js",
  "completed": false,
  "createdAt": "2025-01-01T10:00:00.000Z"
}

###✔ Update a todo
PUT /todos/:id

Body:
{
  "completed": true
}

Response:
{
  "id": "1700012345678",
  "title": "Learn Express.js",
  "completed": true,
  "updatedAt": "2025-01-01T10:05:00.000Z"
}

###✔ Delete a todo
DELETE /todos/:id

Response:
{
  "message": "Todo deleted successfully"
}

##🧪 Test Cases
✔ Valid To-Do creation
✔ Title missing → returns 400
✔ Completed must be boolean
✔ Update non-existing ID → returns 404
✔ Delete same ID twice
✔ GET when no todos available
✔ Data written & updated inside todos.json

##⚠️ Deployment Notes (Important)

If deployed on Render / Railway / Cyclic,
the local JSON file will not persist, because:

Cloud platforms reset the file system

todos.json resets after every restart

API works, but data is temporary.

For permanent storage, use MongoDB / Firebase / external DB.

##🎯 Tech Stack

Node.js

Express.js

Local JSON file (File System)

JavaScript (ES6)