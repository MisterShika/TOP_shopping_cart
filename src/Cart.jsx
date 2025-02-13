import { useEffect } from "react";

function Cart ({cartData, setCartData}) {

    useEffect(() => {
        
    }, [cartData]);

    return (
        <div className="cart-container">
            <ul className="item-list">
                {
                    cartData.map((item) => {
                        return <li key={item.id}>
                            <span className="item-name">{item.id}</span>
                            <span className="item-quantity">{item.quantity}</span>
                        </li>
                    })
                }
            </ul>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    )
}

export default Cart;