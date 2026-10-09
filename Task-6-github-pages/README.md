\# Task 6: Host a Static Website Using GitHub Pages



\## 📌 Project Overview



This project demonstrates how to host a static website using \*\*GitHub Pages\*\* and automate the deployment process using \*\*GitHub Actions\*\*.



The website is designed with HTML and CSS and features an Amazon-inspired shopping homepage layout, including a navigation bar, gaming banner, and product category sections.



The main objective of this task is to understand static website hosting, GitHub repository management, and automated deployment through a CI/CD workflow.



\## 🎯 Objectives



\* Create and organize a static website using HTML and CSS.

\* Host the website using GitHub Pages.

\* Automate website deployment using GitHub Actions.

\* Understand repository structure and file paths.

\* Learn how to troubleshoot deployment errors and GitHub Pages 404 errors.

\* Capture screenshots as proof of project completion.



\## 🛠️ Technologies Used



| Technology     | Purpose                    |

| -------------- | -------------------------- |

| HTML5          | Website structure          |

| CSS3           | Website styling and layout |

| Git            | Version control            |

| GitHub         | Source code repository     |

| GitHub Pages   | Static website hosting     |

| GitHub Actions | Automated deployment       |



\## 📂 Project Structure



```text

Elevate-Labs-IntershipSep/

│

├── .github/

│   └── workflows/

│       └── deploy-task-6.yml

│

└── Task-6-github-pages/

&#x20;   ├── index.html

&#x20;   ├── style.css

&#x20;   ├── imgea/

&#x20;   └── README.md

```



\*\*Important:\*\* The homepage filename must be exactly `index.html` using a lowercase `i`. GitHub Pages runs on a case-sensitive environment, so `Index.html` and `index.html` are different filenames.



\## 🌐 Live Website



\*\*Website URL:\*\*

https://dineshvaishnav8890.github.io/Elevate-Labs-IntershipSep/



\*\*GitHub Repository:\*\*

https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep



\*\*Project Folder:\*\*

\[Task-6-github-pages](https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep/tree/main/Task-6-github-pages)



\## ⚙️ GitHub Actions Deployment



The project uses a GitHub Actions workflow to publish the website.



\### Deployment Process



1\. Website files are committed and pushed to the `main` branch.

2\. GitHub Actions checks out the repository.

3\. The workflow configures GitHub Pages.

4\. The `Task-6-github-pages` directory is uploaded as a Pages artifact.

5\. GitHub Actions deploys the artifact to GitHub Pages.

6\. The live website is opened and verified in a browser.



\*\*Workflow file:\*\* `.github/workflows/deploy-task-6.yml`



\*\*Deployment folder:\*\* `./Task-6-github-pages`



\## 📸 Project Screenshots



\### 1. Website Preview



This screenshot shows the shopping homepage layout, gaming banner, navigation bar, and product category sections.



!\[GitHub Pages Website](screenshots/github-pages-website.png)



\### 2. GitHub Actions Workflow



This screenshot shows the GitHub Actions workflow runs, including the successful deployment run marked with a green check.



!\[GitHub Actions Workflow](screenshots/github-actions-workflow.png)



> \*\*Note:\*\* Keep both screenshot files inside a folder named `screenshots` in the same directory as this README. The image paths above must match the actual filenames.



\## 🚀 How to Run the Website Locally



Since this is a static HTML/CSS website, no backend server or package installation is required.



1\. Clone the repository:



&#x20;  ```bash

&#x20;  git clone https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep.git

&#x20;  ```



2\. Open the project directory:



&#x20;  ```bash

&#x20;  cd Elevate-Labs-IntershipSep/Task-6-github-pages

&#x20;  ```



3\. Open `index.html` in your web browser.



\## ✅ Verification Checklist



\* \[ ] Website files are present in `Task-6-github-pages`.

\* \[ ] Homepage is named `index.html`.

\* \[ ] CSS and image paths are correct.

\* \[ ] GitHub Pages source is configured as \*\*GitHub Actions\*\*.

\* \[ ] The deployment workflow completes successfully.

\* \[ ] The published URL opens the expected website.

\* \[ ] Project screenshots are included in this repository.



\## 🐛 Troubleshooting



\### GitHub Pages shows 404



\* Verify that `index.html` exists in the published folder.

\* Check the exact capitalization of filenames.

\* Confirm that the workflow uploads `./Task-6-github-pages`.

\* Check the latest deployment under the repository's \*\*Actions\*\* tab.



\### CSS or images are missing



\* Verify that `style.css` is linked correctly in the HTML file.

\* Check image paths and folder names.

\* Remember that filenames are case-sensitive.



\### Website does not update



\* Wait for the latest workflow run to finish.

\* Refresh the website with `Ctrl + F5`.

\* Check the deployment logs if the problem continues.



\## 📚 Learning Outcomes



Through this project, I learned:



\* How to host a static website using GitHub Pages.

\* How to manage website source code using Git and GitHub.

\* How GitHub Actions automates deployment.

\* How to configure a deployment workflow for a subfolder.

\* How to troubleshoot file naming, path, and deployment issues.



\## 👨‍💻 Author



\*\*Dinesh Vaishnav\*\*



GitHub: \[@dineshvaishnav8890](https://github.com/dineshvaishnav8890)



\---



⭐ This project was completed as part of a DevOps internship task to gain practical experience with GitHub Pages and deployment automation.



