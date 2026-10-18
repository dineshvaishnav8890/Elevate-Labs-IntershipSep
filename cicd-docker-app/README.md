
CI/CD Pipeline with GitHub Actions & Docker



🏗️ Project Architecture
Developer Push Code
        ↓
GitHub Repository
        ↓
GitHub Actions (CI Pipeline)
        ↓
Run Tests (pytest)
        ↓
Build Docker Image
        ↓
Push Image to Docker Hub
        ↓
Deploy Locally (Docker / Minikube)






🛠️ Tools & Technologies Used
Tool	Purpose
Git	Version Control
GitHub	Code Hosting
GitHub Actions	CI/CD Automation
Docker	Containerization
Docker Hub	Image Registry
Minikube (Optional)	Local Kubernetes Deployment
Python + Flask	Application
Pytest	Testing Framework




📁 Project Structure
cicd-docker-app/
│
├── app.py
├── requirements.txt
├── test_app.py
├── Dockerfile
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── ci-cd.yml
└── screenshots/


 Step 1: Create Python Application
📄 app.py




📦 Step 2: Add Requirements
📄 requirements.txt


🧪 Step 3: Add Unit Test
📄 test_app.py




🐳 Step 4: Create Dockerfile
📄 Dockerfile




🐳 Step 5: Create docker-compose.yml






🔄 Step 6: Setup CI/CD using GitHub Actions
📄 .github/workflows/ci-cd.yml




🔐 Step 7: Add GitHub Secrets

Go to:

GitHub → Settings → Secrets → Actions

Add:

DOCKER_USERNAME
DOCKER_PASSWORD



🚀 Step 8: Push Code to GitHub



🔍 Step 9: Verify CI/CD Pipeline

Go to:

👉 GitHub → Actions tab
👉 Ensure workflow passes successfully


🔍 Step 9: Verify CI/CD Pipeline

Go to:

👉 GitHub → Actions tab
👉 Ensure workflow passes successfully


Open browser:

http://localhost:5000







