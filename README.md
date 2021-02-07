# DESDEO data visualization components

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
Runs all tests. Currently, the application has only unit tests,\
however end-to-end tests should also be run with this command.
```
npm test
```

Produce test coverage report
```
npm test:coverage
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```
npm test:unit
```

### 4. Run Storybook
Launches Storybook for local development.
```
npm run storybook
```

## Todo
- Get rid of container wrappers
- Implement height and width functions in containerUtils.
- Get bar labels working again.