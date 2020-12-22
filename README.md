# DESDEO cata visualization components

## Available Scripts

In the project directory, you can run:

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds and exports the visualization components with Rollup.

### `npm run lint`
Runs linter and fixes linting errors.

### `npm run storybook`
Launches Storybook for local development.

### `npm run build-storybook`
Builds the application as a static Storybook application. Probably not a very useful feature.

## TODO
- [ ] Update ScatterSelection component so that it works correctly with data selection.
- [ ] Try to move event handling away from chart components to container components.
  - Event handling should probably be done on container level to reduce repetition and hide away
  implementation details from the chart components.
