🚀 Task 3 — Infrastructure as Code with Terraform & Docker






📌 Project Overview

This project demonstrates Infrastructure as Code (IaC) using Terraform to provision and manage an Nginx Docker container.

Instead of creating the Docker container manually with docker run, Terraform is used to:

Download/manage the Nginx Docker image

Create an Nginx container

Map container port 80 to host port 8080

Maintain infrastructure state in Terraform

Inspect resources using Terraform state commands

Verify the deployed service through curl and a web browser

Destroy the infrastructure using Terraform

The project was completed in WSL Ubuntu on Windows.

🏗️ Architecture

                    ┌─────────────────────────┐
                    │       WSL Ubuntu        │
                    │                         │
                    │      Terraform          │
                    │          │              │
                    │          ▼              │
                    │   Docker Provider       │
                    │          │              │
                    │          ▼              │
                    │   nginx:alpine Image    │
                    │          │              │
                    │          ▼              │
                    │   terraform-nginx       │
                    │     Docker Container    │
                    │          │              │
                    │     80 → 8080           │
                    └──────────┼──────────────┘
                               │
                               ▼
                         localhost:8080
                               │
                    ┌──────────┴──────────┐
                    │                     │
                  curl                 Browser
                    │                     │
                    └──── Nginx Page ─────┘

🛠️ Technologies Used

Technology

Purpose

Terraform

Infrastructure as Code

Docker

Container runtime

Nginx

Web server

WSL Ubuntu

Development environment

Git/GitHub

Version control

curl

Service verification

📁 Project Structure

Task-3-Infrastructure-as-Code/
│
├── main.tf
├── .terraform.lock.hcl
├── terraform.tfstate
├── terraform.tfstate.backup
├── README.md
│
└── screenshots/
    ├── 01-terraform-init-validate.png
    ├── 02-terraform-plan.png
    ├── 03-terraform-plan-complete.png
    ├── 04-terraform-apply.png
    ├── 05-nginx-curl-test.png
    ├── 06-nginx-browser-test.png
    ├── 07-terraform-state-list-show.png
    ├── 08-terraform-show.png
    └── 09-terraform-destroy.png

Note: terraform.tfstate contains Terraform's state information. In real projects, state files should normally be protected and/or stored in a secure remote backend.

⚙️ Implementation Steps

1. Verify Terraform

terraform -version

2. Initialize Terraform

terraform init

Terraform successfully initialized the Docker provider:

Finding kreuzwerker/docker versions matching "~> 3.0"...
Installing kreuzwerker/docker v3.9.0...
Terraform has been successfully initialized!

Screenshot



3. Validate the Configuration

terraform validate

Expected result:

Success! The configuration is valid.

The configuration was successfully validated.

4. Create the Execution Plan

terraform plan

Terraform displayed the resources that would be created.

The plan showed:

Plan: 2 to add, 0 to change, 0 to destroy.

The resources included:

docker_image.nginx

docker_container.nginx

The Nginx container was configured with:

External Port: 8080
Internal Port: 80
Image: nginx:alpine
Container Name: terraform-nginx

Screenshot



Plan Summary



5. Apply the Infrastructure

Run:

terraform apply

Terraform asks for confirmation:

Do you want to perform these actions?
Only 'yes' will be accepted to approve.

Enter:

yes

Terraform then creates the Docker container.

Expected result:

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Screenshot



🌐 Verify the Nginx Application

6. Test Using curl

Run:

curl http://localhost:8080

The command returned the Nginx HTML page, confirming that the web server was running successfully.

Screenshot



7. Test in Browser

Open:

http://localhost:8080

The browser displayed:

Welcome to nginx!

This confirms that the Terraform-managed Docker container is accessible through the mapped port.

Screenshot



🔍 Terraform State Management

Terraform uses a state file to keep track of infrastructure resources that it manages.

8. List Terraform Resources

Run:

terraform state list

The project showed:

docker_container.nginx
docker_image.nginx

This confirms that Terraform is tracking both the Docker image and container.

9. Inspect a Specific Resource

Run:

terraform state show docker_container.nginx

This displays detailed information about the managed Nginx container, including:

Container ID

Image

Container name

Network information

Port mapping

Runtime configuration

Screenshot



10. Inspect the Current Terraform State

Run:

terraform show

This displays the current infrastructure known to Terraform.

Screenshot



🧹 Destroy the Infrastructure

When the infrastructure is no longer required, it can be removed using:

terraform destroy

Terraform displays the resources that will be destroyed and asks for confirmation.

Enter:

yes

Terraform then removes the managed infrastructure.

Screenshot



📊 Project Workflow

Write Terraform Configuration
           │
           ▼
     terraform init
           │
           ▼
    terraform validate
           │
           ▼
      terraform plan
           │
           ▼
     terraform apply
           │
           ▼
   Docker Nginx Container
           │
           ▼
    localhost:8080
           │
      ┌────┴────┐
      ▼         ▼
     curl    Browser
      │         │
      └────┬────┘
           ▼
     Verify Nginx
           │
           ▼
   terraform state/show
           │
           ▼
    terraform destroy

🎯 Learning Outcomes

By completing this project, the following concepts were demonstrated:

✅ Infrastructure as Code

✅ Terraform installation and initialization

✅ Terraform provider configuration

✅ Terraform resource management

✅ Docker image management through Terraform

✅ Docker container provisioning through Terraform

✅ Port mapping with Terraform

✅ Terraform validation

✅ Terraform planning

✅ Terraform apply

✅ Terraform state management

✅ Infrastructure verification

✅ Terraform destroy

✅ Nginx deployment using Docker

🧪 Important Terraform Commands

Command

Purpose

terraform init

Initializes the working directory

terraform validate

Validates Terraform configuration

terraform plan

Shows proposed infrastructure changes

terraform apply

Creates/updates infrastructure

terraform state list

Lists resources managed by Terraform

terraform state show <resource>

Shows details of a resource

terraform show

Displays Terraform state

terraform destroy

Removes managed infrastructure

📸 Evidence

All screenshots from the implementation are included in the screenshots/ directory:

Terraform initialization and validation

Terraform plan

Terraform plan summary

Terraform apply

Nginx curl verification

Nginx browser verification

Terraform state inspection

Terraform show

Terraform destroy

🏆 Final Result

The project successfully demonstrated Infrastructure as Code using Terraform and Docker.

Terraform was used to provision an Nginx Docker container, expose it through localhost:8080, verify the running web service, inspect the infrastructure state, and finally destroy the provisioned infrastructure.

Terraform + Docker + Nginx
          ↓
Infrastructure Provisioned
          ↓
Nginx Available on :8080
          ↓
Service Verified
          ↓
Infrastructure Destroyed
