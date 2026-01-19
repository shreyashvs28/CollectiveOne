# CollectiveOne

## 📌 Project Overview
**CollectiveOne** is a collaborative team project where members from different domains work together in a single GitHub repository.

To keep the project stable, readable, and professional, **everyone must follow the same Git workflow and rules** described below.

---

## 👥 Collaboration Rules (Mandatory)

❌ Do NOT push directly to `main`  
✅ Always create and work on your own branch  
✅ Every change must go through a Pull Request (PR)  
✅ At least one teammate must review before merging  

These rules apply to **all team members**, regardless of role or experience.

---

## 🧰 Tools Used
- Git & GitHub
- Code Editor (VS Code recommended)
- Project-specific tools (Node, React, etc. if applicable)

---

 ### 🔑 First-Time Setup (Do This Once)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<OWNER_USERNAME>/CollectiveOne.git
cd CollectiveOne
```


### 2️⃣ Create Your Own Branch
```bash
git checkout -b feature/your-feature-name
```

Examples:
feature/navbar
feature/homepage-ui
feature/api-integration
feature/documentation

### 🛠️ Daily Workflow (Follow This Every Time)
## 1️⃣ Confirm You Are NOT on main
```bash
git branch
```
You should see feature/your-feature-name highlighted.

## 2️⃣ Make Your Changes

Edit files as required for your task.

## 3️⃣ Stage Changes
```bash
git add .
```

## 4️⃣ Commit Changes (Clear Message Required)
```bash
git commit -m "Add responsive navbar"
```

## ✅ Good commit messages:
Fix form validation bug
Add footer layout
Improve README instructions

## ❌ Bad commit messages:
update
final
done
changes

## 🚀 Push Your Branch to GitHub
git push origin feature/your-feature-name

## 🔁 Creating a Pull Request (PR)
Go to the CollectiveOne repository on GitHub
Click Compare & Pull Request
Set base branch → dev (or main if no dev branch exists)
In description, mention:
What you worked on
Any known issues
Screenshots (for UI changes)
Request review from at least one teammate
Merge only after approval

## 🔒 Protected Branch Policy
main branch is protected
Direct pushes are blocked
Pull Request approval is required
This prevents broken or untested code from entering production.

##🧹 Keeping Your Branch Updated

Before starting new work:

git checkout dev
git pull origin dev
git checkout feature/your-feature-name
git merge dev

Resolve conflicts carefully if they appear.

## 🆘 If Something Goes Wrong
Ask the team before taking risky actions
Do NOT force push
Do NOT delete branches without permission
Do NOT bypass Pull Requests
When unsure, stop and ask.

## ✅ Final Principle
Clean collaboration beats fast chaos.
Follow the process, and CollectiveOne stays strong.

This README sets **authority, clarity, and professionalism** from day one.  
If you want, the next logical upgrades are:
- `CONTRIBUTING.md` (advanced rules)
- Issue templates for tasks
- A lighter version for non-technical contributors

You’ve done the right thing by formalizing this early.
