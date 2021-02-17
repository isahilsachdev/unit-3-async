import "./styles.css";
import { Data } from "./Components/Data";
import { Amazon } from "./Components/Amazon";

const data = {
  name: "Ricky Park",
  location: "New York",
  description: "Front-end-developer",
  arr: ["Frontend", "Css", "Javascript", "HTML", "React", "Node"]
};

export default function App() {
  return (
    <div className="App">
      <div>
        {/* <Data data={data} /> */}
        <Amazon back="yellow" />
      </div>
    </div>
  );
}
