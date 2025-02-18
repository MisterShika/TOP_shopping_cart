import { useState } from 'react';

function Cart ({cartData, setCartData}) {
    const [showMenu, setShowMenu] = useState(false);
    const totalMath = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalCost = totalMath.toFixed(2);

    const removeItem = (id) => {
        setCartData((prevCartData) =>
            prevCartData.filter((item) =>
                item.id !== id
            )
        );
    };

    const updateQuantity = (id, value) => {
        if(value == 0){
            removeItem(id);
        }else{
            setCartData((prevCartData) =>
                prevCartData.map((item) =>
                    item.id == id ? { ...item, quantity: Number(value) } : item
                )
            );
        }
    };

    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    return (
        <div className="cart-container">
            <div className={`cart-total-container ${showMenu ? "show" : ""}`}>
                <ul className="item-list">
                    {
                        cartData.map((item) => {
                            return <li key={item.id}>
                                <span className="item-name">{item.title}</span>
                                <span className="item-price-total">${item.price * item.quantity}</span>
                                <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, e.target.value)} />
                                <i className="fa-solid fa-x" onClick={() => removeItem(item.id)}></i>
                            </li>
                        })
                    }
                </ul>
                <span className="cart-total">${totalCost}</span>
            </div>
            <i className="cart-toggle fa-solid fa-cart-shopping" onClick={toggleMenu}></i>
        </div>
    )
}

export default Cart;