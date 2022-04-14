// React-Router-DOM
import { Route } from "react-router-dom";

// React-Router-DOM
import Welcome from "./pages/Welcome";

// React-Router-DOM
import Products from "./pages/Products";

import MainHeader from "./components/MainHeader";

// React-Router-DOM-Dynamic-Link
import ProductDetail from "./pages/ProductDetail";

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

        {/* React-Router-DOM-Dynamic-Link */}
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
};

export default App;
