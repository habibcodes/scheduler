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

## Creating Appointment

!["creating appointmet"](https://github.com/habibcodes/scheduler/blob/master/images/creating%20appointment.gif)

## Editing Appointment

!["creating appointmet"](https://github.com/habibcodes/scheduler/blob/master/images/edit%20appointment.gif)

## Deleting Appointment

!["creating appointmet"](https://github.com/habibcodes/scheduler/blob/master/images/delete%20appointment.gif)

## Error Handling 

!["creating appointmet"](https://github.com/habibcodes/scheduler/blob/master/images/deleting%20error.gif)

## Dependencies
  - Axios
  - Babel/core
  - Babel-loader
  - Classnames
  - Node-sass
  - Normalize.css
  - Prop-types
  - React
  - React-dom
  - React-scripts
  - React-test-renderer
  - Storybook/addon-actions
  - Storybook/addon-backgrounds
  - Storybook/addon-links
  - Storybook/addons
  - Storybook/react
  - Testing-library/jest-dom
  - Testing-library/react
  - Testing-library/react-hooks

## Dev Dependencies
  - node-sass: ^4.14.0,
  - prop-types: ^15.7.2,
  - @babel/core: ^7.4.3,
  - @testing-library/jest-dom: ^4.0.0,
  - @storybook/addon-actions: ^5.0.10,
  - @storybook/addon-backgrounds: ^5.0.10,
  - @storybook/addon-links: ^5.0.10,
  - @storybook/addons: ^5.0.10,
  - @storybook/react: ^5.0.10,
  - @testing-library/react-hooks: ^7.0.2,
  - babel-loader: ^8.0.5,
  - @testing-library/react: ^8.0.7,
  - react-test-renderer: ^16.14.0



## Getting Started
1. Install dependencies with `npm install`.
2. Get and install server from https://github.com/lighthouse-labs/scheduler-api. 
3. Run servers using `npm start`. 

```
