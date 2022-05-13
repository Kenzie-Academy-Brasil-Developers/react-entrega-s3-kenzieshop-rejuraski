import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
