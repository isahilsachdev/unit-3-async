
import { GroceryData } from "./Components/GroceryData";

export default function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center" , backgroundColor:"lightgray" , fontSize:"30px" , width:"250px" , margin:"10px auto"}}>My Grocery</h1>
      <GroceryData />
    </div>
  );
}
