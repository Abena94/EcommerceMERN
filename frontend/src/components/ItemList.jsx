import React, { useState } from "react";
import { Item } from "./Item";
import { addtocart } from "../api";
import Swal from "sweetalert2";
import { useAuth } from "./auth";

export const ItemList = ({ products, categories }) => {
  const authTokens=useAuth();
  const initial = 1;
  const [countItem, setCountItem] = useState(initial);
  const [stockItem] = useState(15);
  const increaseCount = () => {
    if (countItem >= stockItem) {
      setCountItem(stockItem);
    } else {
      setCountItem(countItem + 1);
    }
  };

  const decreaseCount = () => {
    if (countItem <= initial) {
      setCountItem(initial);
    } else {
      setCountItem(countItem - 1);
    }
  };
  const addItemToCart = async (data) => {
    const response = await addtocart(data);
    if (response.status === 201) {
      console.log(response.data);
    } else {
      console.log(response.message);
    }
  };
  const onAdd = (id, price) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: `${countItem} items/s Added`,
    });
    addItemToCart({
      cartItems: {
        product: `${id}`,
        quantity: countItem,
        price: price,
      },
    });
    setCountItem(initial);
  };
  console.log(authTokens?.authTokens);
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <div className="ml-2">
            <br />
            <h1>{category.name}:</h1>
            <br />
          </div>

          <div key={category._id} className="containerProducts d-flex flex-wrap justify-content-center">
            {products
              .filter((product) => product.category.name === category.name)
              .map((product) => (
                
                  <div key={product._id} className="product-card card bg-light me-1 ms-1 mb-3 rounded-3 p-2">
                    <Item
                      
                      img={product.productImage}
                      name={product.name}
                      description={product.descripcion}
                      category={product.category.name}
                      price={product.price}
                      increaseCount={increaseCount}
                      decreaseCount={decreaseCount}
                      countItem={countItem}
                    />
                    <div  className="d-flex justify-content-around">
                      <button
                        disabled={!authTokens?.authTokens}
                        onClick={() => onAdd(product._id, product.price)}
                        className="btn btn-success p-1"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
