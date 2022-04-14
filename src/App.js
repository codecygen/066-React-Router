// React-Router-DOM
import { Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <div>
      <MainHeader />

      <main>
        {/* React-Router-DOM */}
        <Route path="/welcome">
          <Welcome />
        </Route>

        {/* React-Router-DOM */}
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
};

export default App;
