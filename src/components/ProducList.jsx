import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../features/productSlice"
import ProductCard from "./ProductCard"
import Nav from "./Nav"

const ProductList = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [dispatch, status])

  return (
    <>
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <div className="w-full bg-green-500 min-h-[100vh] text-center ">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>{error}</p>}

        <div className="flex justify-center items-center gap-2 flex-wrap p-5 ">
          {status === "succeeded" &&
            items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
