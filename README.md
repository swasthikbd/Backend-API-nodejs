REQUIREMENTS
Node.js (v18 or higher)
npm (Node Package Manager)
PostgreSQL (local or hosted on Heroku/PostgreSQL)
Firebase Project for authentication
Heroku CLI (for deployment)

Installation & Setup
Install Dependencies
  /npm install
  
Set Up Environment Variable
Create a .env file in the root directory of your project and include the following variables
/PORT=5000
/DATABASE_URL=postgres://username:password@hostname:port/database_name
/FIREBASE_CONFIG='your_firebase_service_account_json'
/JWT_SECRET='your_jwt_secret_key'

Compile TypeScript
/npm run build

Running the Application Locally
/npm run start

API Endpoints
1.User Authentication
POST /auth/login: Login user with a Firebase token.
POST /auth/signup: Register a new user with Firebase token.
2. User Management (CRUD Operations)
POST /users: Create a new user in the PostgreSQL database.
GET /users/:id: Fetch user details by user ID.
PUT /users/:id: Update user details.
DELETE /users/:id: Delete user by user ID.

Tools & Libraries Used
Node.js: Server-side JavaScript runtime.
Express.js: Web framework for Node.js.
TypeScript: Static typing for JavaScript.
PostgreSQL: Relational database for storing user data.
Firebase Admin SDK: Firebase Authentication for user verification.
jsonwebtoken (JWT): Secure communication with JWT tokens.
dotenv: Manage environment variables.
CORS: Middleware to allow cross-origin requests.
