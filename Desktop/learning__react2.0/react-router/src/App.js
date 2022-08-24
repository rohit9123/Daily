import { Route, Redirect } from "react-router-dom";
import Welcome from "./Pages/welcome.js";
import Product from "./Pages/product";
import ProductDetails from "./components/ProductDetails.js";
import Mainheader from "./components/Mainheader.js";
// import Mainheader
//Route is a component that renders a component when the path matches the current URL
function App() {
  return (
    <div>
      {/* <main> */}
      <Mainheader />
      <main>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Product />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductDetails />
        </Route>
      </main>
      {/* </main> */}
    </div>
  );
}

export default App;
