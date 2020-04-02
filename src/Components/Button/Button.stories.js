import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import Button from "./Button";
import ButtonMd from "./Button.md";

export default {
  component: Button,
  title: "Button",
  parameters: {
    notes: ButtonMd // doesn't work
  },
  decorators: [withKnobs]
};

export const common_text = () => (
  <Button
    onClick={action("clicked")}
    text={text("Button Text", "Hello Button")}
  />
);
