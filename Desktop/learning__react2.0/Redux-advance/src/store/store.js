import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], price: 0 },
  reducers: {
    copyState(state, action) {
      console.log(action.payload);
      state.items = action.payload.items;
      state.price = action.payload.price;
    },
    addItem(state, action) {
      const item = action.payload;
      const price = item.price + state.price;
      const itemIndex = state.items.findIndex((i) => i.title === item.title);
      let isAvailable = state.items[itemIndex];
      const newItems = [...state.items];
      if (isAvailable) {
        const updateItem = { ...isAvailable };
        updateItem.quantity += 1;
        newItems[itemIndex] = updateItem;
      } else {
        item.quantity = 1;
        newItems.push(item);
      }

      return {
        items: newItems,
        price: price,
      };
    },
    removeItem(state, action) {
      const item = action.payload;
      const price = state.price - item.price;
      const itemIndex = state.items.findIndex((i) => i.title === item.title);
      const newItems = [...state.items];
      if (newItems[itemIndex].quantity > 1) {
        const updateItem = { ...newItems[itemIndex] };
        updateItem.quantity -= 1;
        newItems[itemIndex] = updateItem;
      } else {
        newItems.splice(itemIndex, 1);
      }

      return {
        items: newItems,
        price: price,
      };
    },
  },
});
const showModal = createSlice({
  name: "Modal",
  initialState: { show: false, notification: null },
  reducers: {
    flip(state) {
      state.show = !state.show;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

const store = configureStore({
  reducer: { modal: showModal.reducer, cart: cartSlice.reducer },
});

export const modalAction = showModal.actions;
export const cartAction = cartSlice.actions;
export default store;
