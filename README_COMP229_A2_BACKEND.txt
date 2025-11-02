HOW TO INTEGRATE (COMP229 Assignment 2 Backend)

1) Copy everything from this zip into the ROOT of your React project (react-portfolio-starter).
   After copying, your tree should contain:
   - server.js  (root)
   - server/models/*.js
   - server/controllers/*.js
   - server/routes/*.js
   - server/middleware/auth.js
   - .env.example

2) Install required packages (run at the project root):
   npm i express cors mongoose dotenv bcryptjs jsonwebtoken
   npm i -D nodemon concurrently

3) Add these scripts into your existing package.json:
   "scripts": {
     "dev": "concurrently \"vite\" \"nodemon server.js\"",
     "server": "nodemon server.js",
     "client": "vite",
     "build": "vite build",
     "preview": "vite preview"
   }

4) Create .env from .env.example and fill MONGO_URI + JWT_SECRET.

5) Run both frontend + backend together:
   npm run dev

6) Test endpoints in Postman/Thunder Client:
   GET  http://localhost:3000/                  -> { "message": "Welcome to My Portfolio application." }
   CONTACTS:       /api/contacts    [GET, POST, DELETE]
                    /api/contacts/:id [GET, PUT, DELETE]
   PROJECTS:        /api/projects    [GET, POST, DELETE]
                    /api/projects/:id [GET, PUT, DELETE]
   QUALIFICATIONS:  /api/qualifications    [GET, POST, DELETE]
                    /api/qualifications/:id [GET, PUT, DELETE]

   AUTH:
   POST /api/users/register { "name":"Test", "email":"a@b.com", "password":"123456" }
   POST /api/users/login    { "email":"a@b.com", "password":"123456" } -> returns { token }
   GET  /api/users/me  with header: Authorization: Bearer <token>

7) Screenshots you need:
   - Frontend running at http://localhost:5173
   - Backend welcome JSON at http://localhost:3000
   - Terminal showing "MongoDB connected"
   - Postman for CRUD of contacts, projects, qualifications (all methods)
   - Register/Login + protected /me success

Zip your project (without node_modules) + provide GitHub link + Word doc with screenshots.
Good luck!
