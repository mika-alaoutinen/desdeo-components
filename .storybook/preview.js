import { withConsole } from '@storybook/addon-console'
import { addDecorator } from '@storybook/react'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}