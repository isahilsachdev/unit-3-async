import React from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const Navbar = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { toggle, theme, mode } = React.useContext(ThemeContext);

  return (
    <div style={theme[mode]}>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export { Navbar };
