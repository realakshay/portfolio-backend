# Portfolio Backend API
A Node.js + Express backend for managing and serving data for a personal portfolio website.
The backend exposes public read APIs and protected admin APIs to manage profile content.

## Tech Stack
Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

dotenv

CORS

## Project Structure
PortfolioBackend/

├─ controllers/

│   ├── admin.profile.controller.js

│   ├── admin.auth.controller.js

│   └── profile.controller.js

├─ models/

│   ├── Personal.js

│   ├── Skill.js

│   ├── Education.js

│   ├── Experience.js

│   ├── Project.js

│   └── Testimonial.js

├─ routes/

│   ├── profile.routes.js

│   ├── contact.routes.js

│   ├── stat.routes.js

│   ├── admin.profile.routes.js

│   └── admin.auth.routes.js

├─ middleware/

│   └── adminAuth.js

├─ index.js

├─ .env

└─ README.md


## Environment Variables

PORT=3000

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolioDB

JWT_SECRET=your_jwt_secret


## Running the Project

npm install

npm run dev
