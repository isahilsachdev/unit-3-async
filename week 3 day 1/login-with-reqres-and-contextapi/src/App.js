import { AuthContext } from "./AuthContextProvider";
import "./styles.css";
import React from "react";

import { Form } from "./Form";
export default function App() {
  const { Auth, token, setisAuth } = React.useContext(AuthContext);

  return (
    <div className="App">
      <div>
        {!Auth ? <Form /> : <div>Dashboard : {token} </div>}
        {Auth && <button onClick={(e) => setisAuth(!Auth)}>Log Out</button>}
      </div>
    </div>
  );
}
