import { Manu } from "./Components/MobileManufac";
import "./styles.css";
import { MobOs } from "./Components/MobileOs";
import { C1 } from "./Components/C1";
import { C2 } from "./Components/C2";
import { C3 } from "./Components/C3";
import { C4 } from "./Components/C4";
import { C5 } from "./Components/C5";
import { C6 } from "./Components/C6";
import { C7 } from "./Components/C7";
import { C8 } from "./Components/C8";

export default function App() {
  return (
    <div className="App">
      {/* <MobOs />
      <Manu /> */}
      <div>
        <C1 />
        <C2 />
      </div>
      <div>
        <C3 />
        <C4 />
      </div>
      <div>
        <C5 />
        <C6 />
      </div>
      <div>
        <C7 />
        <C8 />
      </div>
    </div>
  );
}
