```js
import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  parameters: { notes: Button1 }
};

export const small = () => <Button text="small" />;
export const medium = () => <Button text="medium" />;
export const special = () => <Button text="The Boss" />;

special.story = {
  parameters: { notes: Button2 }
};
```
