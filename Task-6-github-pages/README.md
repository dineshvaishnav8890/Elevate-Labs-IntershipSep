Task 6 --- Host a Static Website Using GitHub Pages
Internship task: Deploy a static website with GitHub Pages  
Repository:
Elevate-Labs-IntershipSep  
Live website:
https://dineshvaishnav8890.github.io/Elevate-Labs-IntershipSep/
Project overview
This project demonstrates how to publish a static HTML/CSS website using
GitHub Pages and automate deployment with GitHub Actions. The website
contains an Amazon-inspired shopping homepage layout with a navigation
bar, a gaming hero banner, and category cards.
> This is a learning/demo project and is not affiliated with or endorsed
> by Amazon.
Objectives
Build and organize a static website using HTML and CSS.
Keep the site source code in a GitHub repository.
Configure GitHub Pages to publish the site.
Use a GitHub Actions workflow to deploy the website when changes are
pushed to `main`.
Capture evidence of the live site and successful workflow execution.
Technologies used
HTML5 --- page structure
CSS3 --- layout and styling
Git & GitHub --- version control and source hosting
GitHub Pages --- static website hosting
GitHub Actions --- automated deployment workflow
Repository structure
``` text
Elevate-Labs-IntershipSep/
├── .github/
│   └── workflows/
│       └── deploy-task-6.yml
└── Task-6-github-pages/
    ├── index.html
    ├── style.css
    ├── imgea/
    └── README.md
```
Important: GitHub Pages runs on a case-sensitive Linux environment.
The homepage must be named exactly `index.html` (lowercase `i`).
Deployment workflow
Push website changes to the `main` branch.
GitHub Actions checks out the repository.
The workflow prepares GitHub Pages.
The `Task-6-github-pages` folder is uploaded as the Pages artifact.
The deploy step publishes the artifact.
Open the live website URL and verify the result.
How to run locally
Clone the repository:
    ``` bash
    git clone https://github.com/dineshvaishnav8890/Elevate-Labs-IntershipSep.git
    ```
Open the project folder:
    ``` bash
    cd Elevate-Labs-IntershipSep/Task-6-github-pages
    ```
Open `index.html` in a browser. No build step is required for a
plain HTML/CSS site.
Screenshots
Published website
![GitHub Pages website screenshot](screenshots/github-pages-website.png)
GitHub Actions deployment
![GitHub Actions workflow](screenshots/github-actions-workflow.png)
Verification checklist
[ ] `index.html` exists in `Task-6-github-pages/` with lowercase
filename.
[ ] `style.css` and referenced image assets are present.
[ ] GitHub repository → Settings → Pages uses GitHub Actions
as the source.
[ ] The Deploy Task 6 to GitHub Pages workflow finishes
successfully.
[ ] The live URL opens and displays the expected page.
Troubleshooting
404 / File not found: Confirm the uploaded Pages artifact
contains `index.html` at its root. If the workflow uploads
`./Task-6-github-pages`, the `index.html` file must be directly
inside that folder.
CSS or images do not load: Check that asset paths match the
exact folder and filename capitalization.
Workflow does not run: Check the workflow YAML path and confirm
changes were pushed to `main`.
Old page appears: Wait briefly for deployment to finish, then
hard-refresh the browser.
Learning outcomes
Understanding static website hosting.
Understanding the relationship between repository folders and the
published site root.
Using a GitHub Actions workflow for repeatable deployment.
Troubleshooting case-sensitive paths and GitHub Pages 404 errors.

