import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TableCart, TableCartFoot } from "../TableCart";
import { getCartItems, removeItem, clearCart } from "../../api";

export const CartContainer = () => {
  const [cartList, setCartList] = useState({});
  const getCart =  async () => {
    const response = await getCartItems();
    if(response.status ===200){
      
      setCartList(response.data);
    }
  }
 // console.log(cartList?.cartItems[0]?.qty + 5);
  const totalCart = () =>{
    let count=0;
     for (let i = 0;i<cartList?.cartItems?.length;i++){
     count+=cartList?.cartItems[i]?.price * cartList?.cartItems[i]?.qty;
     }
     
     return count;
  }
  
  const clearItem = async (id) => {
    const response = await removeItem({ product: `${id}` });
    if (response.status === 201) {
      console.log("deleted successfully");
    } else {
      console.log("theres error in deleting");
    }
  };
  const clear = (id) => {
    clearItem(id);
  };
  const clearCartItems = async () => {
    const response = await clearCart();
    if (response.status === 201) {
      setCartList([]);
      console.log("yes");
    } else console.log("no");
  };
  const clearAll =() =>{
    clearCartItems();
  }
  useEffect(() => {
    getCart();
  },[]);

  return (
    <div className="mt-5 pt-5">
      <div className="mt-5">
        <div className="container d-flex flex-column align-items-center">
          <h1 className="fw-bold mb-2">~ Chart ~</h1>
          {cartList?.cartItems && cartList?.cartItems.length === 0 ? (
            <>
              <h2 className="text-danger">Le panier est vide</h2>
              <box-icon
                class="cart-empty"
                name="cart-download"
                type="solid"
                animation="tada"
                size="cssSize"
              ></box-icon>
              <Link to="/products" className="btn btn-primary">
                do your shopping
              </Link>
            </>
          ) : (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">unit price</th>
                    <th scope="col">quantity</th>
                    <th scope="col">Sub total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    cartList?.cartItems &&
                      cartList?.cartItems.map((prod) => 
                          <TableCart
                            key={prod._id}
                            item={prod._id}
                            name={prod.name}
                            quantity={prod.qty}
                            price={prod.price}
                            subTotal={prod.price * prod.qty}
                            clear={clear}
                          />
                      )
                  }
                </tbody>
                <tfoot>{<TableCartFoot total={totalCart}/>}</tfoot>
              </table>
              <div className="container d-flex justify-content-around">
                <Link to="/products" className="btn btn-primary">
                  Continue shopping
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={()=>clearAll()}
                >
                  Empty Chart
                </button>
                <button className="btn btn-success">Check out</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
