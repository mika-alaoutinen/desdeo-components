# DESDEO data visualization components

<b>DESDEO components</b> is a component library containing several data visualization charts that are primarily intended for visualizing multi-objective optimization problems. Most of the components are built on top of [Victory.js](https://formidable.com/open-source/victory/) charting library. The components have limited support for mouse gestures, such as clicking on dragging.

The components in this library are intended to be embedded into a separate front-end application that is responsible for state management and defining desired interactions. The front-end application should provide one or more event handler functions to the components. The event handlers are used, for example, as onClick handlers in the components. For an example of how to use the components, see [DESDEO frontend](https://github.com/mika-alaoutinen/desdeo-frontend).

## Setup
Run Storybook locally either traditionally with npm or with Docker Compose.

### Option 1: npm
```
npm i && npm run storybook
```

### Option 2: Docker Compose
```
docker-compose up
```

## Available Scripts
In the project directory, you can run the following scripts.

### 1. Build scripts
Builds and exports the visualization components with Rollup.
```
npm run build
```

Builds the application as a static Storybook application. Probably not a very useful feature.
```
npm run build-storybook
```

### 2. Linting
Runs linter and fixes linting errors.
```
npm run lint
```

### 3. Test scripts
Runs all tests. Currently, the application has only unit tests,
however end-to-end tests should also be run with this command.
```
npm test
```

Produce test coverage report
```
npm test:coverage
```

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```
npm test:unit
```

### 4. Run Storybook
Launches Storybook for local development.
```
npm run storybook
```