# Node.js CI/CD with Jenkins and Docker

A simple Node.js web app for practicing a Jenkins CI/CD pipeline.

## Requirements
- Node.js 18+
- Docker
- Jenkins with Pipeline and Git plugins
- Git and a GitHub repository

## Project files
- `app.js` — web server
- `package.json` — scripts and project metadata
- `test/app.test.js` — basic automated test
- `Dockerfile` — container image instructions
- `Jenkinsfile` — checkout, install, test, build, and deploy stages

## Run locally
```bash
npm install
npm test
npm start
```
Visit http://localhost:3000.

## Run with Docker
```bash
docker build -t nodejs-jenkins-cicd .
docker run --rm -p 3000:3000 nodejs-jenkins-cicd
```

## Configure Jenkins
1. Make sure the Jenkins agent has Git, Node.js/npm, and Docker available.
2. Ensure the Jenkins service account can access Docker. Docker socket access grants powerful host-level privileges; only enable it on a trusted machine.
3. Create a Jenkins **Pipeline** job.
4. Choose **Pipeline script from SCM**, select **Git**, and enter your repository URL and branch.
5. Set the script path to `Jenkinsfile`, save, then click **Build Now**.
6. For automatic builds, configure a GitHub webhook to your reachable Jenkins URL (commonly `/github-webhook/`) and enable the matching GitHub trigger in the job.

## Pipeline stages
1. Checkout source code.
2. Install dependencies.
3. Run tests.
4. Build a Docker image tagged with the Jenkins build number.
5. Replace and start the app container on port 3000.

This is a learning project. Ensure port 3000 is free. A production deployment should use a dedicated target, secrets management, health checks, and a rollback strategy.
