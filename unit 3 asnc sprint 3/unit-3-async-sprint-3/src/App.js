import "./styles.css";
import { Routes } from "./Routes/Routes";
import Products from "./Components/Products";
export default function App() {
  return (
    <div className="App">
      <Routes />
      <Products />
    </div>
  );
}
