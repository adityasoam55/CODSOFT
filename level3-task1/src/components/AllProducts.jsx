import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getAllProducts } from './api';
import Product from './Product';
import Loading from './Loading';
// import Input from './Input';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("")
  const [sort, setSort] = useState("default");


  useEffect(function () {
    let allProductsPromise = getAllProducts();

    allProductsPromise.then(function (resp) {
      setProducts(resp);
      setLoading(false);
    }).catch(function () {
      setLoading(false)
    })

  }, [])

  let filteredProducts = products.filter(function (product) {
    let title = (product.title).toLowerCase();
    return title.indexOf(searchQuery) != -1;
  })

  useMemo(function () {
    if (sort === "price-high-to-low") {
      console.log("sort running")
      filteredProducts.sort(function (a, b) {
        return b.price - a.price
      })
    } else if (sort === "price-low-to-high") {
      filteredProducts.sort(function (a, b) {
        return a.price - b.price
      })
    } else if (sort === "name") {
      filteredProducts.sort(function (a, b) {
        return a.title < b.title ? -1 : 1;
      })
    }
  }, [sort])

  if(loading){
    return <Loading />
  }

  return (
    <div className="bg-white mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

    </div>
  )
}

export default AllProducts;

