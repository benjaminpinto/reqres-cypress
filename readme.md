# Reqres API Testing - Cypress

![Cypress Tests](https://github.com/benjaminpinto/reqres/actions/workflows/cypressAction.yml/badge.svg) ![Security OWASP](https://github.com/benjaminpinto/reqres/actions/workflows/owaspAction.yml/badge.svg)

This project is the automation of an API exploratory test performed upon [reqres application](https://reqres.in/).

To write these tests, I've used only Cypress.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I've used versions `v16.15.0` and `8.5.5` of Node.js and npm, respectively. I recommend you to use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

> **Note:** This project doesn't handle sensible data to perform tests (tokens/passwords/etc), so I didn't used a `cypress.env.json` file.

> **Important:** This project uses Github actions to implement CI. If you want to clone it and run at your own repository, remember to update project's ID at [`cypress.config.js`](./cypress.config.js) file, and set your CYPRESS_RECORD_KEY at Github secrets, if you ant to set up Cypress Dashboard.

## Security Tests

In this project, I'm using OWASP ZAP to perform security verifications. a [Github Action](/.github/workflows/owaspAction.yml) was created to trigger it and, like it happens with Cypress Tests, Security tests are called at every commit on master branch.

The results of the last security test run is available [here](https://benjaminpinto.github.io/reqres/).

## About the project structure

- Spec files are localized at [`cypress/e2e`](/cypress/e2e/) folder;
- Custom commands are organized at [`support`](cypress/support) folder;

---

This project was created by [Benjamin Pinto](https://www.linkedin.com/in/benjamin-pinto/).
