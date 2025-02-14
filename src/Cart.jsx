import { useEffect } from "react";

function Cart ({cartData, setCartData}) {
    const totalMath = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalCost = totalMath.toFixed(2);

    useEffect(() => {
        
    }, [cartData]);

    

    return (
        <div className="cart-container">
            <ul className="item-list">
                {
                    cartData.map((item) => {
                        return <li key={item.id}>
                            <span className="item-name">{item.title}</span>
                            <span className="item-quantity">{item.quantity}</span>
                            <span className="item-price-total">${item.price * item.quantity}</span>
                        </li>
                    })
                }
            </ul>
            <span className="cart-total">${totalCost}</span>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    )
}

export default Cart;