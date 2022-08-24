import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { modalAction, cartAction } from "./store/store";
import { fetechCartData, sendCartData } from "./store/cart-action";
import Notification from "./components/UI/Notification";
let isIntial = true;
function App() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.show);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.modal.notification);
  // console.log(showModal);
  useEffect(() => {
    // also right
    // if (isIntial) {
    //   const func2 = async () => {
    //     const response = await fetch(
    //       "https://react-http-e25d1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
    //     );
    //     const data = await response.json();
    //     // console.log(data);
    //     dispatch(cartAction.copyState(data));
    //   };
    //   func2();
    //   isIntial = false;
    //   return;
    // }
    // dispatch(
    //   modalAction.showNotification({
    //     status: "pending",
    //     message: "sending cart data",
    //     title: "sending",
    //   })
    // );
    // const func = async () => {
    //   const response = await fetch(
    //     "https://react-http-e25d1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Something went wrong");
    //   }
    //   dispatch(
    //     modalAction.showNotification({
    //       status: "success",
    //       message: "sending cart data succesfully",
    //       title: "success",
    //     })
    //   );
    // };

    // func().catch((err) => {
    //   dispatch(
    //     modalAction.showNotification({
    //       status: "error",
    //       message: "sending cart data failed",
    //       title: "error",
    //     })
    //   );
    // });

    if (isIntial) {
      dispatch(fetechCartData());
      isIntial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  // , [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showModal && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
