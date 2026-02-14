
import { useState } from "react"
import "./flex.css"
import { useNavigate } from "react-router-dom"

const Flex = () => {
    let navigate = useNavigate()
     const [cart, setcart] = useState(() => {
            const save = localStorage.getItem("flip-cart");
            return save ? JSON.parse(save) : [];
        })
    

    const flex = [
        {
            id: 22,
            img: "public/images/shirt1.jpg",
            price: 840,
            info: "Men Slim Fit Casual Shirt",
            Category: "shirt",
            Description: "This stylish shirt offers a perfect blend of comfort and fashion. Made from premium-quality fabric, it provides a soft feel and all-day freshness. Its modern fit and elegant design make it ideal for both casual and formal occasions, giving you a smart and confident look wherever you go."

        },
        {
            id: 23,
            img: "public/images/shirt2.jpg",
            price: 250,
            info: "Men Regular Fit Collar Shirt",
            Category: "shirt",
            Description: "This stylish shirt offers a perfect blend of comfort and fashion. Made from premium-quality fabric, it provides a soft feel and all-day freshness. Its modern fit and elegant design make it ideal for both casual and formal occasions, giving you a smart and confident look wherever you go."

        },
        {
            id: 24,
            img: "public/images/shirt3.jpg",
            price: 430,
            info: "Men Slim Fit Casual Shirt",
            Category: "shirt",
            Description: "This stylish shirt offers a perfect blend of comfort and fashion. Made from premium-quality fabric, it provides a soft feel and all-day freshness. Its modern fit and elegant design make it ideal for both casual and formal occasions, giving you a smart and confident look wherever you go."

        },
        {
            id: 25,
            img: "public/images/shirt4.jpg",
            price: 540,
            info: "Striped Spread Shirt",
            Category: "shirt",
            Description: "This stylish shirt offers a perfect blend of comfort and fashion. Made from premium-quality fabric, it provides a soft feel and all-day freshness. Its modern fit and elegant design make it ideal for both casual and formal occasions, giving you a smart and confident look wherever you go."

        },
        {
            id: 26,
            img: "public/images/shirt5.jpg",
            price: 300,
            info: "Men Regular Fit Collar Shirt",
            Category: "shirt",
            Description: "This stylish shirt offers a perfect blend of comfort and fashion. Made from premium-quality fabric, it provides a soft feel and all-day freshness. Its modern fit and elegant design make it ideal for both casual and formal occasions, giving you a smart and confident look wherever you go."

        },
        {
            id: 27,
            img: "public/images/shirt6.jpg",
            price: 380,
            info: "Men Slim Fit Casual Shirt",
            Category: "shirt",
            Description: "This stylish shirt offers a perfect blend of comfort and fashion. Made from premium-quality fabric, it provides a soft feel and all-day freshness. Its modern fit and elegant design make it ideal for both casual and formal occasions, giving you a smart and confident look wherever you go."

        },
        {
            id: 28,
            img: "public/images/shirt7.jpg",
            price: 600,
            info: "Striped Spread Shirt",
            Category: "shirt",
            Description: "This stylish shirt offers a perfect blend of comfort and fashion. Made from premium-quality fabric, it provides a soft feel and all-day freshness. Its modern fit and elegant design make it ideal for both casual and formal occasions, giving you a smart and confident look wherever you go."

        }


    ]
    const AddToCart = (product) => {
        const exist = cart.find((p) => p.id === product.id);
        let updatecart;
        if (exist) {
            updatecart = cart.map((p) => p.id === product.id
                ? { ...p, quantity: (p.quantity || 1) + 1 } : p)
        }
        else {
            updatecart = [...cart, { ...product, quantity: 1 }]


        }
        alert("Add your product in cart ")
        setcart(updatecart);
        localStorage.setItem("flip-cart", JSON.stringify(updatecart));
        console.log(updatecart)

    }
    const singlepage = (product) => {
        navigate("/product", { state: product })

    }
    return (
        <>
            <div className="flex-container">
                <h1>Shop Favorites</h1>

                <div className="flex-optionp-box">
                    <div className="flex-option">
                        <div className="flex-img-box">
                            <img src="public/images/fashion2.webp" />
                        </div>

                    </div>
                    <div className="flex-product-box">

                        {
                            flex.map((item, i) => (
                                <div className="flex-product">
                                    <div className="flex-product-img" onClick={() => { singlepage(item) }}>
                                        <img src={item.img} />
                                    </div>
                                    <div className="flex-text-box">
                                        <h4>{item.price}</h4>
                                        <span>{item.info}</span>
                                    </div>
                                    <button onClick={() => AddToCart(item)}>add to cart</button>
                                </div>

                            ))
                        }




                    </div>


                </div>
            </div>

        </>
    )
}

export default Flex