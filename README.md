\# HireSphere – Smart Job Portal \& Recruitment Management System



HireSphere is a full-stack web application designed to simplify the job recruitment process by connecting candidates and recruiters on a single platform.



The system allows candidates to create accounts, browse job opportunities, view job details, and apply for jobs. Recruiters can register, post job openings, and manage recruitment activities.



\## 🚀 Features



\### Candidate



\* Candidate registration and login

\* Browse available jobs

\* View detailed job information

\* Apply for jobs

\* View candidate dashboard



\### Recruiter



\* Recruiter registration and login

\* Post new job openings

\* Manage posted jobs

\* View recruitment-related information

\* Recruiter dashboard



\### Backend



\* RESTful APIs using Spring Boot

\* User management

\* Job management

\* Application management

\* Authentication APIs

\* MySQL database integration

\* CORS configuration



\### Frontend



\* Responsive React interface

\* React Router navigation

\* Authentication context

\* Job listing and details pages

\* Candidate and recruiter dashboards

\* REST API integration using Axios



\## 🛠️ Technologies Used



\### Frontend



\* React.js

\* JavaScript

\* HTML5

\* CSS3

\* Bootstrap

\* Axios

\* Vite



\### Backend



\* Java

\* Spring Boot

\* Spring Data JPA

\* REST API

\* Maven



\### Database



\* MySQL



\### Development Tools



\* Git

\* GitHub

\* Visual Studio Code

\* IntelliJ IDEA / Eclipse

\* MySQL Workbench



\## 📁 Project Structure



```text

HireSphere/

│

├── backend/

│   └── backend/

│       ├── src/

│       │   └── main/

│       │       ├── java/

│       │       └── resources/

│       └── pom.xml

│

├── frontend/

│   ├── public/

│   ├── src/

│   │   ├── components/

│   │   ├── context/

│   │   ├── pages/

│   │   └── services/

│   ├── package.json

│   └── vite.config.js

│

├── .gitignore

└── README.md

```



\## 🔄 Application Flow



```text

Candidate / Recruiter

&#x20;       ↓

React Frontend

&#x20;       ↓

Axios REST API Calls

&#x20;       ↓

Spring Boot Backend

&#x20;       ↓

Service Layer

&#x20;       ↓

Repository Layer

&#x20;       ↓

MySQL Database

```



\## 🔗 Main API Endpoints



\### Users



```text

GET    /api/users

GET    /api/users/{id}

POST   /api/users

PUT    /api/users/{id}

DELETE /api/users/{id}

```



\### Authentication



```text

POST /api/auth/login

POST /api/auth/register

```



\### Jobs



```text

GET    /api/jobs

GET    /api/jobs/{id}

POST   /api/jobs

PUT    /api/jobs/{id}

DELETE /api/jobs/{id}

```



\### Applications



```text

GET    /api/applications

GET    /api/applications/{id}

POST   /api/applications

PUT    /api/applications/{id}

DELETE /api/applications/{id}

```



\## ⚙️ Installation \& Setup



\### Prerequisites



Make sure the following are installed:



\* Java

\* Maven

\* Node.js

\* npm

\* MySQL

\* Git



\### 1. Clone the Repository



```bash

git clone <your-github-repository-url>

cd HireSphere

```



\### 2. Setup Database



Create the MySQL database:



```sql

CREATE DATABASE hiresphere\_db;

```



Configure the database connection in the Spring Boot application configuration.



\### 3. Run Backend



Open a terminal:



```bash

cd backend/backend

mvn spring-boot:run

```



Backend will run on:



```text

http://localhost:8080

```



\### 4. Run Frontend



Open another terminal:



```bash

cd frontend

npm install

npm run dev

```



Frontend will run on the Vite development server, usually:



```text

http://localhost:5173

```



\## 🔐 Security Note



Database passwords, API keys, environment variables, and other sensitive information should not be committed to GitHub.



Use environment variables or local configuration files for sensitive credentials.



\## 🎯 Project Objective



The main objective of HireSphere is to provide a centralized recruitment platform that reduces manual recruitment processes and provides an easy-to-use interface for both candidates and recruiters.



\## 📌 Future Enhancements



\* JWT-based authentication

\* Role-based authorization

\* Resume upload

\* Recruiter application management

\* Application status tracking

\* Email notifications

\* Job search and filtering

\* AI-based job recommendations

\* AI-powered resume analysis

\* AWS deployment

\* Docker and CI/CD integration



\## 👩‍💻 Author



\*\*Amiritha A P\*\*



B.Tech – Artificial Intelligence \& Data Science



\## 📄 License



This project is developed for educational and academic purposes.



