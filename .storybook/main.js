module.exports = {
  'addons': [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(ts|tsx)'
  ],
}