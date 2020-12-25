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
- [ ] Probably need to setup Redux with storybook.
  - Components should never directly mutate data, but instead dispatch Redux actions.
  - May have to rethink the onClick behavior in BarChart and ScatterChart, because they directly mutate data.
- [ ] Try to move event handling away from chart components to container components.
