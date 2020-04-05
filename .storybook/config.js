import {
  configure,
  addDecorator,
} from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

configure(
  require.context("../stories", true, /\.stories\.js$/),
  module
);

addDecorator(withKnobs);
