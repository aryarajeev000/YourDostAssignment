# User Directory Web App

A simple React application that fetches and displays users from the ReqRes API.  
The app includes search, sorting, filtering, pagination, and a responsive table UI.

## 🚀 Features
- Fetch users from `https://reqres.in/api/users`
- Search by name or email
- Sort by first name or email (A–Z / Z–A)
- Filter by email domain or first letter
- Client-side pagination
- Loading spinner during API calls
- Fully responsive UI using Tailwind CSS v4

## 🛠 Tech Stack
- React + Vite
- Tailwind CSS v4
- Axios
- React Icons

## 📁 Project Structure
src/
├── components/
│ ├── SearchBar.jsx
│ ├── UserTable.jsx
│ ├── Pagination.jsx
│ └── LoadingSpinner.jsx
├── App.jsx
├── main.jsx
└── index.css


## 📦 Installation
git clone <repository-url>
cd user-directory
npm install
npm run dev


## 🔧 Build for Production

## 🌐 Deploy
You can deploy easily on Vercel or Netlify:
- Build: `npm run build`
- Output folder: `dist/`

## 📌 API Used
GET https://reqres.in/api/users

## 👍 Summary
This project demonstrates clean UI rendering, API integration, and essential data table features like search, sort, filter, and pagination using React and Tailwind CSS v4.
