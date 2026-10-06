🚀 Task 4 — Git Version Control

Elevate Labs DevOps Internship — Task 4
A practical Git + GitHub workflow demonstrating branching, commits, Pull Requests, merge flow, .gitignore, documentation, and release tagging.

📌 Project Overview

This project demonstrates a clean Git workflow for a DevOps project using Git and GitHub.

What is included

Feature-based development

GitHub Pull Request workflow

Branch comparison

Controlled merge flow

.gitignore

Markdown documentation

Bash demo application

Release tag v1.0.0

GitHub evidence screenshots

🎯 Objectives

Use Git for version control.

Work with feature, development, and main branches.

Create meaningful commits.

Push changes to GitHub.

Use Pull Requests for controlled integration.

Demonstrate branch comparison and merge readiness.

Use .gitignore.

Create a release tag.

Document the workflow professionally.

🧰 Tools

Tool

Purpose

Git

Version control

GitHub

Remote repository & Pull Requests

WSL Ubuntu

Development environment

Bash

Demo application

Markdown

Documentation

🌿 Branching Strategy

FEATURE
   │
   │ Pull Request
   ▼
 DEV
   │
   │ Pull Request
   ▼
 MAIN
   │
   ▼
v1.0.0

Feature — implement Task 4 changes.

Dev — integrate and validate changes.

Main — release-ready branch.

📁 Project Structure

Task-4-Git-Version-Control/
├── app/
│   └── app.sh
├── screenshots/
│   ├── github-branch-comparison.png
│   ├── github-pull-request.png
│   └── github-main-repository.png
├── .gitignore
├── README.md
└── VERSION

💻 Bash Application

Run:

chmod +x app/app.sh
./app/app.sh

Expected output:

======================================
   Elevate Labs - DevOps Internship
   Task 4 - Git Version Control
======================================

Application is running successfully!
Git workflow demonstration completed.
Version: 1.0.0

🔄 Git Workflow

git status
git branch
git switch feature
git add .
git commit -m "feat: add task 4 git version control project"
git push -u origin feature

Create a GitHub Pull Request:

feature → dev

After validation, promote:

dev → main

Then create the release tag:

git switch main
git pull origin main
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

📸 GitHub Evidence

1. Branch Comparison

The GitHub comparison page shows the feature branch compared with main and indicates that the branches can be merged automatically.



2. Pull Request

The Pull Request page shows the commits, changed files, and Ready to merge state.



3. Main Repository

The repository view shows the Task 4 directory, three branches, and one Git tag.



🏷️ Versioning

Release version:

v1.0.0

Check tags:

git tag

Inspect the release:

git show v1.0.0

🧹 .gitignore

Typical ignored content:

.DS_Store
Thumbs.db
.vscode/
.idea/
*.tmp
*.temp
*.log
.env
node_modules/
dist/
build/
.terraform/
*.tfstate

⚔️ Merge Conflict Handling

Check the conflict:

git status

Resolve the conflict markers:

<<<<<<< HEAD
current branch
=======
incoming branch
>>>>>>> feature

Then:

git add .
git commit -m "fix: resolve merge conflict"

📊 Completion Checklist

Git repository used

Feature-based development

Pull Request created

Branch comparison demonstrated

Changes merged through GitHub

.gitignore included

Markdown documentation included

v1.0.0 tag present

GitHub screenshots captured

Project documented

🧠 Learning Outcomes

git status

git branch

git switch

git add

git commit

git push

git pull

Pull Requests

Branch comparison

Merge workflow

Git tags

.gitignore

Merge conflict resolution

GitHub documentation

👨‍💻 Project Information

Repository: dineshvaishnav8890/Elevate-Labs-InternshipSep

Project: Task-4-Git-Version-Control

Version: v1.0.0

Internship: Elevate Labs — DevOps Internship

⭐ Final Workflow

Modify Code
    ↓
Feature Branch
    ↓
git add → git commit → git push
    ↓
Pull Request
    ↓
Dev
    ↓
Pull Request
    ↓
Main
    ↓
v1.0.0

Task 4 completed successfully — Git + GitHub version-control workflow demonstrated.
