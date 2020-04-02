import React, { Component } from "react";
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

export const AllButton = () => (
  <>
    <DefaultButton />
    <PrimaryButton />
    <SuccessButton />
  </>
);

// AllButton.story = {
//   decorators: [
//     storyFn => (
//       <div
//         style={{ display: "flex", justifyContent: "space-around" }}
//       >
//         {storyFn()}
//       </div>
//     )
//   ]
// };

export class DefaultButton extends Component {
  render() {
    return (
      <Button
        onClick={action("clicked")}
        text={text("Default Button", "Default Button")}
      />
    );
  }
}

export class PrimaryButton extends Component {
  render() {
    return (
      <Button
        onClick={action("clicked")}
        text={text("Primary Button", "Primary Button")}
        type="primary"
      />
    );
  }
}

export class SuccessButton extends Component {
  render() {
    return (
      <Button
        onClick={action("clicked")}
        text={text("Success Button", "Success Button")}
        type="success"
      />
    );
  }
}
