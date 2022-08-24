import { modalAction, cartAction } from "./store";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      modalAction.showNotification({
        status: "pending",
        message: "sending cart data",
        title: "sending",
      })
    );
    const response = await fetch(
      "https://react-http-e25d1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    dispatch(
      modalAction.showNotification({
        status: "success",
        message: "sending cart data succesfully",
        title: "success",
      })
    );
  };
};

export const fetechCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-e25d1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        console.log(response);
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      let data = await fetchData();
      if (!data) {
        data = {};
        data.items = [];
        data.totalQuantity = 0;
      }

      dispatch(
        cartAction.copyState({
          items: data.items || [],
          totalQuantity: data.totalQuantity || 0,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(
        modalAction.showNotification({
          status: "error",
          message: "fetching cart data failed",
          title: "error",
        })
      );
    }
  };
};
