# My Movies

## 🛠️ Installation

First run `npm install` to install all dependencies.

Create your local .env file running this in your terminal `cp .env.ref .env.local`\
Change the variables with your own informations.

You can get your own OMDb API Key here : [http://www.omdbapi.com/](http://www.omdbapi.com/)

## ⚙️ Run application

`npm start`

## 🪄 Code quality and style

This project run **ESLint** and **Prettier** in a **Typescript** environment.

It use **Commitlint** with **Husky** to format and lint all files in a `pre-commit` hook before checking commit message in `commit-msg` hook. This hook use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
