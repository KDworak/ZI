 The P_PAW2 project is a full-stack application utilizing React for the frontend, Node.js with Mongoose for the backend, and MongoDB as the database. Docker is employed to containerize the application, facilitating straightforward setup and deployment.

Key Features: - User Authentication and Authorization: Secure user login and access control mechanisms.

CRUD Operations: Comprehensive Create, Read, Update, and Delete functionalities for various resources.

Responsive UI: A user-friendly interface built with React.

API Integration: Efficient communication between the frontend and backend services.

Containerization: Dockerized environment for consistent development and deployment.


Technologies Used: - Frontend: React, Axios

Backend: Node.js, Express, Mongoose

Database: MongoDB

Containerization: Docker


**Setup and Installation:**

*Prerequisites:*
11- Docker and Docker Compose
- Node.js and npm (for local development)12

1. **Clone the Repository:**
   13```bash
   git clone https://github.com/KDworak/P_PAW2.git
   cd P_PAW2
   ```14

2. **Environment Variables:**
   15Create `.env` files in both the `backend` and `frontend` directories with the necessary configurations.16

3. **Running Locally (without Docker):**
   - *Backend:*
     17```bash
     cd backend
     npm install
     npm start
     ```18
   - *Frontend:*
     19```bash
     cd frontend
     npm install
     npm start
     ```20

4. **Running with Docker:**
   21```bash
   docker-compose up --build
   ```22
   23This command will start the backend, frontend, and MongoDB containers.24

**Usage:**
25- Access the frontend at `http://localhost:3000`.
- The backend API is available at `http://localhost:5000/api`.26

**API Endpoints:**

*Auth:*
27- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: User login28

*Users:*
29- `GET /api/users`: Retrieve all users
- `GET /api/users/:id`: Retrieve user by ID
- `PUT /api/users/:id`: Update user information
- `DELETE /api/users/:id`: Delete user30

**Docker:**
31The project includes a `docker-compose.yml` file that defines services for the backend, frontend, and MongoDB.32

Common Docker commands:
33- **Start containers:** `docker-compose up`
- **Stop containers:** `docker-compose down`
- **Rebuild containers:** `docker-compose up --build`34

**Contributing:**
35Contributions are welcome.36 To contribute:
371. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.38

**License:**
39This project is licensed under the MIT License.40 See the [LICENSE](https://github.com/KDworak/ZI/blob/main/LICENSE) file for more information.41

