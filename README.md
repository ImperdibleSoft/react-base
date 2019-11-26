![React Base logo](./src/images/favicons/icon-256.png)

# React Base

This repository is a modular abstraction to build a [ReactJS](https://facebook.github.io/react/) web application based
on [Redux](http://redux.js.org/) paradigm.

This seed should clarify how to wire up all the modules of your application, even when we understand that in some cases
there must be some changes needed by the structure to fit your needs correctly

- [Overview](#overview)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
  - [Wiring up your development environment](#wiring-up-your-development-environment)
  - [Initializing development server](#initializing-development-server)
- [Distribution](#distribution)
  - [Building your production application](#building-your-production-application)
  - [Running production server](#running-production-server)
- [Testing](#testing)
  - [Running your tests](#running-your-tests)
  - [Generating code coverage](#generating-code-coverage)
- [License](#license)
- [Additional Docs](/docs)
  - [Architecture](/docs/architecture.md)
  - [CSS tooling](/docs/css-tooling.md)

## Overview

**React Base** makes use of the latest tools to improve your workflow, and enablesyou to create future ready
applications:

- [ReactJS](https://reactjs.org/) based UI
- [Redux](http://redux.js.org/) based architecture
- [Styled Components](https://www.styled-components.com/) based styles
- [Webpack](https://webpack.js.org/) builder
- [ExpressJS](https://github.com/expressjs/express) for Development & Production server
- [Webpack HMR](https://webpack.github.io/docs/hot-module-replacement.html) for Hot Reload/Live Reload support
- [Babel](https://babeljs.io/) for JSX and ES6 transpilation
- [Eslint](https://github.com/eslint/eslint) as linting utils
- [TypeScript](https://www.typescriptlang.org/) as static types superset
- [Jest](https://jestjs.io/) as testing and coverage framework
- [Enzyme](https://github.com/airbnb/enzyme) as testing utils for React

## Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

### Prerequisites

React Base makes use a number of NodeJS tools to initialize and test React Base. You must have node.js 6.2.0 at least,
and its package manager (npm) installed. You can get it from [NodeJS](https://nodejs.org).

You also may want to work with [Yarn](https://yarnpkg.com/), wich is a compatible package manager.

### Installing

You can clone our Git repository:

`$ git clone git@gitlab.com:man-app/web-client.git`

This method requires Git to be installed on your computer. You can get it from [here](http://git-scm.com).

### Wiring up your development environment

Setting up **React Base** is as easy as running:

`$ yarn`

This command will install all the required dependencies and start your development server, which takes care of all the
changes you make to your code and runs all the awesome stuff that ends with your code automagically transpiled and
running on your browser.

Please note that `yarn` is only required on your first start, or in case of updated dependencies.

### Initializing development server

Once all the dependencies are installed, you can run `yarn start` to initialize your development server.

The dev server uses [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot module replacement) that
injects updated modules into the bundle in runtime. It's like LiveReload

## Distribution

You can generate a complete distribution source ready for production enviroments.

### Building your production application

`$ yarn build` will create a minified version for your application, ready for production.

### Running production server

`$ yarn serve` will run production enviroment of your application serving content from dist directory.

## Testing

**React Base** uses [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme) (a testing utillity
created by [Airbnb](https://github.com/airbnb/) for unit testing).

### Running your tests

`yarn test` will perform your unit testing.

### Generating code coverage

**React Base** uses [Jest](https://jestjs.io/) for code coverage and you can generate reports in console or icov/html
format.

`yarn test` will perform your code coverage automatically, generating an html report located in coverage/ folder.

## License

**React Base** is available under the [MIT license](LICENSE).
