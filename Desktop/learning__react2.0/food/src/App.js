import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
import CartProvider from "./store/CardProvider";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const hideShowModal = () => {
    setShowModal(false);
  };
  const setCartItemsHandler = (items) => {
    setCartItems((prev) => [...prev, ...items]);
  };
  return (
    <CartProvider>
      {showModal && <Cart handleShowModal={hideShowModal} />}
      <Header handleShowModal={handleShowModal} />
      <main>
        <Meals setCartItems={setCartItemsHandler} />
      </main>
    </CartProvider>
  );
}

export default App;
