# 🚀 Elevate Labs DevOps Internship

Welcome to my **Elevate Labs DevOps Internship Repository!**

This repository documents my DevOps internship projects, tasks, assignments, and hands-on practical work. It demonstrates my learning journey across Linux, Git, GitHub, Docker, Jenkins, GitHub Actions, Terraform, AWS, CI/CD pipelines, Infrastructure as Code (IaC), observability, and automated deployments.

My goal is to build practical DevOps skills, understand automation workflows, and document projects in a clear, reproducible way.

---

## 📌 Repository Highlights

- Hands-on projects covering source control, containers, CI/CD, infrastructure, and observability.
- Automation practice with Jenkins and GitHub Actions.
- Docker-based application packaging and local multi-service environments.
- Project documentation, screenshots, and validation steps.
- Continuous learning through implementation and troubleshooting.

## 📂 Projects & Tasks

### 1. First Project

Basic DevOps project implementation and hands-on practice.

👉 [View First Project](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep/tree/main/First-Project)

### 2. Jenkins Second Project

CI/CD automation and build pipeline practice using Jenkins.

👉 [View Jenkins Second Project](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep/tree/main/Jenkins-Second-Project)

### 3. Task 3 — Infrastructure as Code

Infrastructure provisioning and management using Terraform.

👉 [View Task 3 — Infrastructure as Code](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep/tree/main/Task-3-Infrastructure-as-Code)

### 4. Task 4 — Git Version Control

Practice with Git commands, repositories, commits, branches, and version control.

👉 [View Task 4 — Git Version Control](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep/tree/main/Task-4-Git-Version-Control)

### 5. Task 6 — Host a Static Website Using GitHub Pages

Created and hosted a static website using HTML and CSS, with GitHub Actions automating deployment.

**Key highlights:**
- Static website hosting using GitHub Pages.
- HTML5 and CSS3 for website structure and styling.
- GitHub Actions for automated deployment.
- Deployment configuration and troubleshooting.

👉 [View Task 6 — GitHub Pages](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep/tree/main/Task-6-github-pages)

🌐 **Live Website:** [Open GitHub Pages Website](https://dineshvaishnav8890.github.io/Elevate-Labs-IntershipSep/)

### 6. CI/CD Pipeline Using Python Flask, Docker & GitHub Actions

Built a containerized Flask web application and configured a GitHub Actions workflow to automate testing, Docker image building, and publishing to Docker Hub.

**Key highlights:**
- Python Flask application running on port `5000`.
- Dockerfile for containerizing the application.
- Automated application testing using `pytest`.
- GitHub Actions workflow triggered by pushes to the `main` branch.
- Docker image build and publishing to Docker Hub.
- GitHub repository secrets for Docker Hub authentication.
- CI/CD troubleshooting and project documentation.

**Technologies:** Python, Flask, pytest, Docker, Docker Hub, GitHub Actions.

👉 [View CI/CD Docker App Project](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep/tree/main/cicd-docker-app)

👉 [View Standalone CI/CD Repository](https://github.com/dineshvaishnav8890/cicd-docker-app)

### 7. Complete Observability System — Docker, Prometheus, Grafana, Loki & Jaeger

Built a local, multi-container observability lab around a Node.js demo application. The project brings together the components used to explore application metrics, logs, and distributed tracing.

**Key highlights:**
- Docker Compose builds and starts the application and supporting services.
- Node.js application endpoints include `/health`, `/api/success`, `/api/error-demo`, and `/metrics`.
- Prometheus is used to query time-series metrics such as `demo_http_requests_total`.
- Grafana provides an interface for dashboards and data exploration.
- Loki and Promtail are included for log collection and querying.
- Jaeger is included for distributed-trace exploration.
- Screenshots document container startup, application health, metrics output, and a Prometheus graph.

**Technologies:** Node.js, Docker, Docker Compose, Prometheus, Grafana, Loki, Promtail, Jaeger.

👉 **Project folder:** `devops-observability-project/` (add the project folder or repository link here when it is published).

**Local service URLs (based on the current Compose setup):**
- Application: `http://localhost:3000`
- Health check: `http://localhost:3000/health`
- Metrics: `http://localhost:3000/metrics`
- Prometheus: `http://localhost:9090`
- Grafana: `http://localhost:3001`
- Loki: `http://localhost:3100`
- Jaeger UI: `http://localhost:16686`

**Start the stack:**
```bash
docker compose up --build -d
docker compose ps
```

**Useful validation queries and commands:**
```bash
curl http://localhost:3000/health
curl http://localhost:3000/metrics
docker compose logs --tail=100
```

Prometheus example query:
```promql
demo_http_requests_total
```

> **Validation note:** The current screenshots demonstrate successful container startup, a healthy application response, exposed metrics, and a Prometheus metric graph. Verify that Loki is receiving logs and Jaeger is displaying application traces before claiming end-to-end log and trace delivery.

---

## 🛠️ Technologies Used

| Category | Technologies |
|---|---|
| Operating Systems | Linux, Ubuntu |
| Version Control | Git, GitHub |
| Programming | Python, Node.js |
| Web Technologies | Flask, HTML5, CSS3 |
| Containers | Docker, Docker Compose |
| CI/CD & Automation | Jenkins, GitHub Actions |
| Testing | pytest |
| Container Registry | Docker Hub |
| Infrastructure as Code | Terraform |
| Cloud Computing | AWS |
| Observability | Prometheus, Grafana, Loki, Promtail, Jaeger |
| Package Management | npm, pip |
| Website Hosting | GitHub Pages |

---

## 🔄 CI/CD Workflow

The CI/CD Docker Flask project follows this workflow:

1. **Code:** Make changes to the application and push them to GitHub.
2. **Trigger:** GitHub Actions starts the workflow when code is pushed to `main`.
3. **Test:** Install Python dependencies and run automated tests using `pytest`.
4. **Build:** Build the Docker image using the project's Dockerfile.
5. **Authenticate:** Use GitHub Actions secrets to authenticate with Docker Hub.
6. **Publish:** Push the image to Docker Hub with the `latest` tag.
7. **Deploy:** Run the published image in a Docker environment when required.

**Workflow overview:**

`Git Push → GitHub Actions → Tests → Docker Build → Docker Hub`

---

## 📈 Observability Workflow

The observability project explores the three main signals used to understand application behavior:

- **Metrics:** Numeric measurements over time, queried with Prometheus and visualized in Grafana.
- **Logs:** Event records collected with Promtail and stored/queryable through Loki.
- **Traces:** Request spans explored in Jaeger, when application tracing instrumentation and export are configured.

**Intended workflow:**

`Node.js App → Metrics / Logs / Traces → Prometheus / Loki / Jaeger → Grafana or Jaeger UI`

A running container proves that the service started; it does not by itself prove that telemetry is being collected. Check Prometheus targets, query logs in Loki, and generate requests to confirm traces appear in Jaeger.

---

## 📚 What I Learned

- **Linux Administration:** Linux commands, file permissions, and basic system management.
- **Git & GitHub:** Repositories, commits, branches, remotes, and collaboration.
- **Python & Flask:** Building and running a simple web application.
- **Testing:** Writing and running automated tests with `pytest`.
- **Docker:** Creating Docker images and running containerized applications.
- **Docker Compose:** Running and managing multi-container environments.
- **Docker Hub:** Publishing and managing container images.
- **Jenkins:** Exploring build automation and CI/CD pipeline concepts.
- **GitHub Actions:** Automating tests, builds, and deployments using YAML workflows.
- **Terraform:** Understanding Infrastructure as Code and provisioning concepts.
- **AWS:** Exploring cloud services and deployment concepts.
- **GitHub Pages:** Hosting a static website and automating deployment.
- **Observability:** Understanding metrics, logs, traces, and the tools used to explore them.
- **Troubleshooting:** Resolving Git, Docker, workflow, file-path, and deployment issues.
- **DevOps Best Practices:** Automation, repeatability, version control, validation, and documentation.

---

## 🎯 Internship Goals

- Gain hands-on experience with industry-relevant DevOps tools.
- Build and understand CI/CD automation workflows.
- Practice containerization and cloud deployment.
- Learn Infrastructure as Code and configuration management.
- Improve Linux administration, Git, Docker, and troubleshooting skills.
- Explore observability for application health and performance.
- Maintain clear documentation for professional development.

---

## ▶️ How to Use This Repository

1. Open the project link from the **Projects & Tasks** section.
2. Read the project's README for prerequisites and setup instructions.
3. Review configuration files before running commands.
4. Run commands from the relevant project directory.
5. Check service status and logs if an error occurs.
6. Follow the project's validation steps and compare the output with its screenshots.

**General Docker troubleshooting commands:**
```bash
docker compose ps
docker compose logs --tail=100
docker compose down
```

> Commands, environment variables, and service URLs can differ between projects. Follow the README inside each project for its exact configuration.

---

## 🔐 Security Notes

- Never commit passwords, access keys, tokens, private keys, or `.env` files containing secrets.
- Store CI/CD credentials in GitHub Actions Secrets or an appropriate secret manager.
- Use least-privilege permissions for cloud credentials.
- Do not expose development dashboards or observability endpoints publicly without suitable authentication and network controls.
- Review `.gitignore` and remove sensitive data before pushing code.

---

## 👨‍💻 About Me

**Dinesh Chand Vaishnav**

- **GitHub:** [@dineshvaishnav8890](https://github.com/dineshvaishnav8890)
- **Main Repository:** [Elevate Labs DevOps Internship](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep)
- **CI/CD Project:** [cicd-docker-app](https://github.com/dineshvaishnav8890/cicd-docker-app)

---

## 🗺️ Future Improvements

- Add project-specific screenshots, architecture diagrams, and demo links.
- Add automated linting and security scanning to CI/CD workflows.
- Add versioned Docker image tags and deployment automation.
- Expand Terraform projects with reusable modules and documented outputs.
- Add Grafana dashboards and alert rules to the observability stack.
- Validate and document complete log shipping and trace propagation.
- Add concise setup instructions and troubleshooting sections to every project.

---

⭐ **Thank you for visiting my repository!**

I will continue adding projects and practical exercises as I progress in my DevOps learning journey.
