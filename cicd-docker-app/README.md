# 🚀 CI/CD Pipeline with Docker, Flask & GitHub Actions

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-Web%20Framework-black?logo=flask)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088FF?logo=githubactions&logoColor=white)
![Status](https://img.shields.io/badge/Project-Learning%20Project-orange)

A beginner-friendly DevOps project that demonstrates how to build, test, containerize, and publish a Python Flask application using **GitHub Actions and Docker Hub**.

## 📌 Project Overview

This project implements a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a simple Flask web application.

Whenever code is pushed to the `main` branch, GitHub Actions automatically installs dependencies, runs automated tests, builds a Docker image, and pushes the image to Docker Hub if the previous steps succeed.

## ✨ Features

- 🐍 Python Flask web application
- 🧪 Automated testing with Pytest
- 🐳 Docker image creation and containerization
- ⚙️ Automated CI/CD using GitHub Actions
- 📦 Docker image publishing to Docker Hub
- 🔐 Secure authentication using GitHub Secrets
- 🔄 Automatic pipeline execution on code push

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Application programming |
| Flask | Web framework |
| Pytest | Automated testing |
| Docker | Application containerization |
| Git & GitHub | Version control and source code hosting |
| GitHub Actions | CI/CD automation |
| Docker Hub | Docker image registry |

## 📂 Project Structure

```text
cicd-docker-app/
├── .github/
│   └── workflows/
│       └── docker-publish.yml
├── ScreenShoot/
├── app.py
├── test_app.py
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
└── README.md
```

> The GitHub Actions workflow is stored in the parent repository's `.github/workflows/` directory when this project is maintained as a subfolder of another repository. Adjust the structure above to match your actual repository layout.

## ⚙️ How the CI/CD Pipeline Works

1. **Code Push:** Developer pushes code to the `main` branch.
2. **Checkout:** GitHub Actions downloads the repository code.
3. **Environment Setup:** Python is configured on the GitHub Actions runner.
4. **Install Dependencies:** Required Python packages are installed.
5. **Run Tests:** Pytest executes the automated tests.
6. **Build Docker Image:** Docker creates an image of the Flask application.
7. **Docker Hub Login:** GitHub Actions authenticates using repository secrets.
8. **Push Image:** The image is uploaded to Docker Hub if all previous steps succeed.

## 🚀 Getting Started

### Prerequisites

Install the following tools:

- Python 3
- Git
- Docker
- A GitHub account
- A Docker Hub account

### 1. Clone the Repository

```bash
git clone https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep.git
cd Elevate-Labs-IntershipSep/cicd-docker-app
```

### 2. Create a Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

For Windows PowerShell:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

### 3. Install Dependencies

```bash
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

### 4. Run the Application

```bash
python app.py
```

Open your browser and visit:

**http://localhost:5000**

Expected output:

```text
CI/CD Pipeline Working Successfully 🚀
```

### 5. Run Automated Tests

```bash
python -m pytest -v
```

## 🐳 Run with Docker

### Build the Docker Image

Run this command from the `cicd-docker-app` directory:

```bash
docker build -t cicd-docker-app:latest .
```

### Start the Container

```bash
docker run -d \
  --name flask-app \
  -p 5000:5000 \
  cicd-docker-app:latest
```

Open **http://localhost:5000** to verify the application.

### Stop the Container

```bash
docker stop flask-app
docker rm flask-app
```

## 📦 Publish to Docker Hub

Replace `YOUR_DOCKERHUB_USERNAME` with your Docker Hub username.

### Build and Tag

```bash
docker build -t YOUR_DOCKERHUB_USERNAME/cicd-docker-app:latest .
```

### Login to Docker Hub

```bash
docker login
```

Use your Docker Hub username and password or access token when prompted.

### Push the Image

```bash
docker push YOUR_DOCKERHUB_USERNAME/cicd-docker-app:latest
```

### Pull and Run the Published Image

```bash
docker pull YOUR_DOCKERHUB_USERNAME/cicd-docker-app:latest
docker run -d -p 5000:5000 YOUR_DOCKERHUB_USERNAME/cicd-docker-app:latest
```

## 🔐 GitHub Actions Secrets

To enable automatic Docker Hub publishing, configure the following repository secrets:

| Secret Name | Description |
|---|---|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Your Docker Hub access token |

Navigate to:

**GitHub Repository → Settings → Secrets and variables → Actions**

Never hardcode passwords, tokens, or other credentials in your source code or workflow files.

## 📸 Project Screenshots

Add your project screenshots to the `ScreenShoot/` folder and display them below.

Example:

```markdown
![Application Output](ScreenShoot/app-output.png)
![GitHub Actions Pipeline](ScreenShoot/github-actions.png)
![Docker Hub Image](ScreenShoot/docker-hub.png)
```

Replace these example filenames with the actual screenshot filenames in your repository.

## 🎯 Learning Outcomes

By completing this project, I learned how to:

- Develop and run a Python Flask application.
- Manage dependencies using `requirements.txt`.
- Write and execute automated tests with Pytest.
- Create and run Docker containers.
- Configure a CI/CD pipeline using GitHub Actions.
- Build and publish Docker images to Docker Hub.
- Manage deployment credentials securely using GitHub Secrets.
- Troubleshoot common CI/CD pipeline errors.

## 🔮 Future Improvements

- Add code quality checks and linting.
- Add Docker image versioning and release tags.
- Scan Docker images for security vulnerabilities.
- Deploy the application to a cloud platform.
- Add application health checks and monitoring.
