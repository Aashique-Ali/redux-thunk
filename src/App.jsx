import { useState } from "react"
import Products from "./components/ProductCard"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import ProductList from "./components/ProducList"
import Cart from "./components/Cart"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
