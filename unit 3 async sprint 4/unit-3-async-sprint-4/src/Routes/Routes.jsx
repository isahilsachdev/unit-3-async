import { Link, Route, Switch } from "react-router-dom";
import { Home } from "../Components/Home";
import { Student } from "../Components/Student";

export const Routes = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {/* <Link to="/student/:id">Student</Link> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/student/:id">
          <Student />
        </Route>
      </Switch>
    </div>
  );
};
