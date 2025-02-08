import React, { useEffect, useState } from "react";
import { getProductDetails } from "./api";
import Loading from "./Loading";
import CartList from "./CartList";

function CartPage({ cart, updateCart }) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsIds = Object.keys(cart);
        const MyProductPromises = productsIds.map(function (id) {
            return getProductDetails(id);
        });

        Promise.all(MyProductPromises).then(function (products) {
            setProducts(products);
            setLoading(false);
        });
    }, [cart]);


    if (loading) {
        return <Loading />;
    }

    return (

    <div className = "p-10 flex items-center justify-center" >
        <CartList products={products} cart={cart} updateCart={updateCart} />
    </div >
  );
}

export default CartPage;
