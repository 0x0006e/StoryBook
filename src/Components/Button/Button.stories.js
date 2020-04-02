import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import Button from "./Button";
import ButtonMd from "./Button.md";

export default {
  component: Button,
  title: "All Button",
  parameters: {
    notes: ButtonMd // doesn't work
  },
  decorators: [withKnobs]
};

export const AllButton = () => (
  <>
    <Button
      onClick={action("clicked")}
      text={text("Default Button", "Default Button")}
    />
    <Button
      onClick={action("clicked")}
      text={text("Primary Button", "Primary Button")}
      type="primary"
    />
    <Button
      onClick={action("clicked")}
      text={text("Button", "Success Button")}
      type="success"
    />
  </>
);

export const DefaultButton = () => (
  <>
    <Button
      onClick={action("clicked")}
      text={text("Default Button", "Default Button")}
    />
  </>
);

export const PrimaryButton = () => (
  <Button
    onClick={action("clicked")}
    text={text("Primary Button", "Primary Button")}
    type="primary"
  />
);

export const SuccessButton = () => (
  <Button
    onClick={action("clicked")}
    text={text("Success Button", "Success Button")}
    type="success"
  />
);
