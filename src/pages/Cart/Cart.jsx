
import { useEffect, useState } from "react"
import "./cart.css"
import { useNavigate } from "react-router-dom"
import Product from "../single_item/product"
const Cart = () => {
    const [cart, setCart] = useState([])
    let naviagte = useNavigate()
    const goLogin = () => {
        naviagte("/login")

    }
    console.log(cart)
    useEffect(() => {
        const saved = localStorage.getItem("flip-cart");
        if (saved) {
            try {
                let store = JSON.parse(saved);
                if (store) {
                    store = store.map((item) => ({
                        ...item,
                        quantity: item.quantity || 1,
                        basePrice: Number(item.basePrice || item.price), // ✅ convert to number
                        price: Number(item.price || item.basePrice),     // ✅ convert to number
                    }));
                    setCart(store);
                } else {
                    setCart([]);
                }
            } catch (err) {
                console.error("Invalid data in localStorage, clearing cart:", err);
                localStorage.removeItem("flip-cart");
                setCart([]);
            }
        }
    }, []);


    const savecart = (updatecart) => {
        setCart(updatecart);
        localStorage.setItem("flip-cart", JSON.stringify(updatecart));

    }
    const increaseQty = (Product) => {
        const updatecart = cart.map((item) =>
            item.id === Product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    price: Number(item.basePrice) * (item.quantity + 1), // ✅ safe calculation
                }
                : item
        );
        savecart(updatecart);
    };

    const decreaseQty = (Product) => {
        const updatecart = cart.map((item) =>
            item.id === Product.id && item.quantity > 1
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    price: Number(item.basePrice) * (item.quantity - 1), // ✅ safe calculation
                }
                : item
        );
        savecart(updatecart);
    };



    const handleremove = (product) => {
        const updatecart = cart.filter((item) => item.id !== product);
        savecart(updatecart)
    }

    const order = (item) => {
        naviagte("/Order", { state: item })
    }

    const token = localStorage.getItem("token")
    return (
        <>
            {
                token ? <>


                    {cart.length === 0 ? (
                        <p style={{ textAlign: "center" }}>No item in cart</p>
                    ) :
                        <>
                            <div className="cart-full-box">
                                <div className="cart-product-box">
                                    {
                                        cart.map((item, i) => (
                                            <div className="cart-product">
                                                <div className="cart-product-imgbox">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="cart-product-detail">
                                                    <div className="cart-detail-box">
                                                        <h1>{item.info}</h1>
                                                        <h3>₹{item.price}</h3>
                                                        <p>Category:{item.Category}</p>
                                                        <div className="cart-btn-box" >
                                                            <button className="cart-btn" onClick={() => increaseQty(item)}>+</button>
                                                            <span>{item.quantity}</span>
                                                            <button className="cart-btn" onClick={() => decreaseQty(item)}>-</button>
                                                            <p onClick={() => { handleremove(item.id) }}>Remove Item*</p>
                                                            <p onClick={() => { order(item) }}>Place Ordar</p>

                                                        </div>
                                                    </div>

                                                </div>
                                                <hr />
                                            </div>


                                        ))
                                    }

                                </div>

                            </div>
                            <div className="cart-foot-box">
                                <div className="cart-foot-left-box">
                                    <span> Policies:Returns Policy |</span>
                                    <span> Terms of use |</span>
                                    <span> Security |</span>
                                    <span>  Privacy | </span>
                                    <span> © 2007-2025 Flipkart.com | </span>
                                </div>

                                <span>Need help? Visit the Help Center or Contact Us</span>

                            </div>
                        </>

                    }

                </>
                    : <div className="cart-full-box">
                        <div className="cart-box">

                            <img src="/images/missing-cart.png" alt="" />
                            <div className="cart-text-box">
                                <p>Missing Cart items?</p>
                                <p>Login to see the items you added previously</p>
                            </div>
                            <button onClick={goLogin}>Login</button>
                        </div>
                        <hr />


                        <div className="cart-foot-box">
                            <div className="cart-foot-left-box">
                                <span> Policies:Returns Policy |</span>
                                <span> Terms of use |</span>
                                <span> Security |</span>
                                <span>  Privacy | </span>
                                <span> © 2007-2025 Flipkart.com | </span>
                            </div>

                            <span>Need help? Visit the Help Center or Contact Us</span>

                        </div>
                    </div>
            }



        </>
    )
}
export default Cart 