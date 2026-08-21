# EcoQuest

![GitHub stars](https://img.shields.io/github/stars/sundram1343/EcoQuest?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/sundram1343/EcoQuest?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/sundram1343/EcoQuest?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/sundram1343/EcoQuest?style=for-the-badge&logo=github)

## 📑 Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Key Dependencies](#key-dependencies)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Contributors](#contributors)
- [Contributing](#contributing)

## 📝 Description

EcoQuest — a backend api built with Express.js, JavaScript, MongoDB, Vite.

## 🛠️ Tech Stack

![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Notable libraries:** Mongoose, Multer

## 🏗️ Architecture

A high-level view of how the main pieces fit together:

```mermaid
flowchart TD
    User["👤 User / Browser"]
    API["⚙️ Express API"]
    User --> API
    DB[("🗄️ MongoDB")]
    API --> DB
```

## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/sundram1343/EcoQuest.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

## 📦 Key Dependencies

```
bcrypt: ^6.0.0
cors: ^2.8.6
dotenv: ^17.4.2
express: ^5.2.1
init: ^0.1.2
jsonwebtoken: ^9.0.3
mongoose: ^9.6.1
multer: ^2.1.1
nodemon: ^3.1.14
```

## 📁 Project Structure

```
.
├── Backend
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── Questcontroller.js
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   ├── models
│   │   ├── quest-model.js
│   │   └── user-model.js
│   ├── package.json
│   └── routes
│       ├── authRoutes.js
│       ├── questRoutes.js
│       └── userRouter.js
├── Frontend
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Components
│   │   │   ├── Footer
│   │   │   │   ├── Footer.css
│   │   │   │   └── Footer.jsx
│   │   │   ├── NavBar
│   │   │   │   ├── Navabr.jsx
│   │   │   │   └── Navbar.css
│   │   │   └── OnProfileClick
│   │   │       ├── OnProfileClick.css
│   │   │       └── OnProfileClick.jsx
│   │   ├── Pages
│   │   │   ├── Home
│   │   │   │   ├── Home.css
│   │   │   │   └── Home.jsx
│   │   │   ├── Impact
│   │   │   │   ├── Impact.css
│   │   │   │   └── Impact.jsx
│   │   │   ├── LeaderBoard
│   │   │   │   ├── LeaderBoard.css
│   │   │   │   └── LeaderBoard.jsx
│   │   │   ├── Login
│   │   │   │   ├── SignUp.css
│   │   │   │   ├── SignUp.jsx
│   │   │   │   ├── login.css
│   │   │   │   └── login.jsx
│   │   │   ├── Profile
│   │   │   │   ├── Profile.css
│   │   │   │   └── Profile.jsx
│   │   │   └── Tasks
│   │   │       ├── Tasks.css
│   │   │       └── Tasks.jsx
│   │   ├── assets
│   │   │   ├── HomeImage.png
│   │   │   ├── ImpactPage.png
│   │   │   └── SignUpImage.png
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── vite.config.js
└── README.MD
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above

## 👥 Contributors

Thanks to everyone who has contributed to this project:

<p align="left">
<a href="https://github.com/sundram1343" title="sundram1343"><img src="https://avatars.githubusercontent.com/u/215622160?v=4&s=64" width="64" height="64" alt="sundram1343" style="border-radius:50%" /></a>
<a href="https://github.com/Pratushshukla" title="Pratushshukla"><img src="https://avatars.githubusercontent.com/u/206700792?v=4&s=64" width="64" height="64" alt="Pratushshukla" style="border-radius:50%" /></a>
</p>

[See the full list of contributors →](https://github.com/sundram1343/EcoQuest/graphs/contributors)

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/sundram1343/EcoQuest.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

---

<div align="center">

[![Made with ReadmeBuddy](https://img.shields.io/badge/Made%20with-ReadmeBuddy-8B5CFF?style=for-the-badge&logo=markdown&logoColor=white)](https://readmebuddy.com)

<sub>Generate beautiful READMEs in seconds → <a href="https://readmebuddy.com">readmebuddy.com</a></sub>

</div>
