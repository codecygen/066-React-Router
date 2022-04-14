// React-Router-DOM
import { Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

const App = () => {
  return (
    <div>
      {/* React-Router-DOM */}
      <Route path="/welcome">
        <Welcome />
      </Route>

      {/* React-Router-DOM */}
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
};

export default App;
