import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      state.items.push(product)
      alert("product added to cart")
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
