import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

import "@storybook/addon-console";

addDecorator((storyFn) => (
  <div style={{ textAlign: "left" }}>{storyFn()}</div>
));

addParameters({
  notes: "no special story nodes finded",
  options: {
    showRoots: true,
    theme: themes.dark,
  },
});
