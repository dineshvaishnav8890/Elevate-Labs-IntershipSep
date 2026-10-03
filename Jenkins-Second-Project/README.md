# Jenkins CI/CD Pipeline with Docker

A simple Node.js application integrated with a Jenkins CI/CD pipeline. The pipeline checks out the source code from GitHub, installs dependencies, runs tests, and builds a Docker image.

## Project Overview

This project demonstrates a basic continuous integration workflow using **Jenkins**, **GitHub**, **Node.js**, and **Docker**.

### Objectives

- Retrieve application code from the GitHub repository.
- Install Node.js dependencies using npm.
- Run the application's automated test script.
- Build a Docker image for the application.
- Verify that the containerized application can run locally.

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | Runs the application |
| npm | Installs dependencies and runs scripts |
| Jenkins | Automates the CI/CD pipeline |
| GitHub | Hosts the source code and Jenkinsfile |
| Docker | Builds and runs the application container |
| Linux / WSL | Development and execution environment |

## Project Structure

```text
Jenkins-Second-Project/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
├── Jenkinsfile
├── README.md
└── test/
    └── app.test.js
```

## Pipeline Workflow

The Jenkins pipeline is configured to run when changes are pushed to the tracked `main` branch.

1. **Checkout** — Jenkins checks out the repository source.
2. **Install & Test** — Jenkins enters the project directory, installs dependencies with `npm install`, and runs `npm test`.
3. **Build Docker Image** — Docker builds an image using the project's `Dockerfile`.

> The pipeline's configured stages were verified as successful in Jenkins.

## Run the Application Locally

### Prerequisites

Make sure Node.js, npm, and Docker are installed and available in your terminal.

### Run with Node.js

From the project directory:

```bash
npm install
npm test
npm start
```

The application listens on port `3000`. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build and run with Docker

Build the image:

```bash
docker build -t nodejs-jenkins-cicd:local .
```

Run a container:

```bash
docker run -d -p 3000:3000 --name jenkins-app nodejs-jenkins-cicd:local
```

Open [http://localhost:3000](http://localhost:3000) to check the application.

To view the running container:

```bash
docker ps
```

To stop and remove the container:

```bash
docker stop jenkins-app
docker rm jenkins-app
```

If a container named `jenkins-app` already exists, remove it before reusing that name.

## Jenkins Configuration

For a Pipeline job using **Pipeline script from SCM**:

- **SCM:** Git
- **Repository:** your GitHub repository URL
- **Branch:** `main`
- **Script Path:** `Jenkins-Second-Project/Jenkinsfile`

The Jenkins agent needs access to the required tools, including Node.js/npm and Docker. In the WSL/Linux setup used for this project, Docker access for the Jenkins user was enabled by adding that user to the `docker` group and restarting Jenkins.

**Security note:** Membership in the Docker group grants powerful control over the Docker host. Use this configuration only in a trusted learning environment and follow your organization's security practices for shared or production systems.

## Troubleshooting Notes

| Problem | Resolution used |
|---|---|
| `npm: not found` | Install Node.js and npm in the environment where the Jenkins job runs. |
| Project files not found by npm | Run npm commands from the application directory in the pipeline. |
| Docker socket permission denied | Check Docker group membership and verify Docker access as the Jenkins user. |

## Verification

The following checks were completed during the project:

- Jenkins showed all configured pipeline stages as successful.
- The Docker image `nodejs-jenkins-cicd:6` appeared in the local image list.
- The application container was started with port `3000` published.
- The application was checked through `http://localhost:3000`.

## Repository

GitHub repository: [Elevate-Labs-IntershipSep](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep)

Project folder: `Jenkins-Second-Project`

---

**Project:** Jenkins CI/CD Pipeline with Docker  
**Application:** Node.js  
**Purpose:** Internship learning project
