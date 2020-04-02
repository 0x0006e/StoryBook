import React from "react";
import { addDecorator } from "@storybook/react";
import { addParameters } from "@storybook/react";

addDecorator(storyFn => (
  <div style={{ textAlign: "left" }}>{storyFn()}</div>
));

addParameters({ notes: "no special story nodes finded" });
