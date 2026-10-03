# Node.js Demo App — CI/CD with GitHub Actions and Docker

A small Node.js HTTP application demonstrating an automated CI/CD workflow using **GitHub Actions**, **Docker**, and **Docker Hub**.

## Project Objective

Automate the process that runs tests, builds a Docker image, and pushes the image to Docker Hub whenever code is pushed to the `main` branch.

## Technology Stack

* **Node.js** — Runs the sample HTTP application
* **GitHub** — Source-code repository
* **GitHub Actions** — CI/CD automation
* **Docker** — Packages the application into an image
* **Docker Hub** — Stores the published image

## How the Pipeline Works

1. A commit is pushed to the `main` branch.
2. GitHub Actions checks out the repository.
3. The workflow sets up Node.js 20 and installs dependencies using `npm ci`.
4. The workflow runs the test suite using `npm test`.
5. After tests pass, the workflow authenticates to Docker Hub using GitHub Actions secrets.
6. The workflow builds the Docker image and pushes the `latest` tag to Docker Hub.

## Run Locally

### Requirements

* Node.js 20 or compatible
* npm
* Docker (for container-based execution)

### Install Dependencies and Test

```bash
npm ci
npm test
```

### Start the Application

```bash
node app.js
```

Open `http://localhost:3000` in your browser.

### Build and Run with Docker

Build the image:

```bash
docker build -t nodejs-demo-app .
```

Run the container:

```bash
docker run --rm -p 3000:3000 nodejs-demo-app
```

Then open `http://localhost:3000`.

## GitHub Actions Setup

Workflow file: `.github/workflows/main.yml`

The workflow uses these repository secrets:

| Secret               | Purpose                                |
| -------------------- | -------------------------------------- |
| `DOCKERHUB_USERNAME` | Docker Hub account name                |
| `DOCKERHUB_TOKEN`    | Docker Hub access token used for login |

Add these secrets under:

**Repository → Settings → Secrets and variables → Actions**

Use a Docker Hub access token with the required push permissions. Never commit tokens or passwords to the repository.

## Docker Image

The image tag used in this project is:

```text
dineshvaishnav/nodejs-demo-app:latest
```

## Repository Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── app.js
├── test.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

## What This Project Demonstrates

* Automated testing with GitHub Actions
* Repeatable Docker image builds
* Secure use of CI/CD credentials through repository secrets
* Automatic image publishing on pushes to `main`

## Notes

* The sample app responds with `Hello from DevOps CI/CD Project!`.
* The test script checks the HTTP response.
* The `latest` tag is convenient for a demo; production workflows often also publish immutable version or commit-SHA tags.
* This workflow publishes the Docker image. It does not automatically deploy the application to a running production server.

