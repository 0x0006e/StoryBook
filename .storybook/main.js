module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-notes/register-panel",
    "@storybook/addon-knobs/register"
  ]
};
