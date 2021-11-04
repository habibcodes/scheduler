# Interview Scheduler

## Description
A fully built and tested React application that allows users to book and cancel interviews. It combines a concise API wit a WebSocket server to build a realtime experience. 

## Features
  - SPA design using React
  - Data is persisted by API server using PostgreSQL database
  - Client application communicates with API server via HTTP using JSON
  - Full testing with 7 suites of 35 tests using Jest, as well as E2E testing
    for complete user story via Cypress
  - Users can:
    - create, delete, and edit appointments
    - get a real-time update of appointment availability
    - click on available spots to add new appointments
    - store and retrieve appointment schedules from the database
    - 

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
