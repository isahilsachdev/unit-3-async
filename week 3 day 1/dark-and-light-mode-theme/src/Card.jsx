import React from "react";
import { ThemeContext } from "./ThemeContextProvider";

import Switch from "@material-ui/core/Switch";
const Card = () => {
  const { dark, toggle, theme, mode } = React.useContext(ThemeContext);

  return (
    <div>
      <h1>
        {mode} mode , Wanna change ?{" "}
        <Switch
          checked={dark}
          onChange={toggle}
          color="primary"
          name="status"
        />{" "}
      </h1>
      <div style={theme[mode]}>
        <div>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.cIOWse9whfliJoCPgLIiOQHaEK&pid=Api&P=0&w=272&h=154"
            alt=""
          />
          <div>Cristiano Ronaldo</div>
        </div>
        <div>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.JRatfBao34xMYX6XbANVGgHaE8&pid=Api&P=0&w=233&h=156"
            alt=""
          />
          <div>Lionel Messi</div>
        </div>
      </div>
    </div>
  );
};

export { Card };
