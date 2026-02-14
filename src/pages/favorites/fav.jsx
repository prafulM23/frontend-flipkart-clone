import { useState } from "react"
import "./fav.css"
import { useNavigate } from "react-router-dom"

const Fav = () => {
    let navigate = useNavigate()
    const [cart, setcart] = useState(() => {
        const save = localStorage.getItem("flip-cart");
        return save ? JSON.parse(save) : [];
    })
    const fav = [
        {
            id: 17,
            img: "/images/shoes.jpg",
            price: 1200,
            info: "Running Fast And Comfortable",
            Category: "shoes"
        },
        {
            id: 18,
            img: "/images/watch.jpg",
            price: 890,
            info: "Smart Watch 5star",
            Category: "Watch"
        },
        {
            id: 19,
            img: "/images/Wireless.jpg",
            price: 610,
            info: "Primum Sound ",
            Category: "Wireless"
        },
        {
            id: 20,
            img: "/images/sleeper2.jpg",
            price: 359,
            info: "Walk Smothe ",
            Category: "sleeper"
        },
        {
            id: 21,
            img: "/images/face.jpg",
            price: 540,
            info: "looks good",
            Category: "faceWash"
        }
    ]
    const singlepage = (product) => {
        navigate("/product", { state: product })

    }
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
    return (
        <>
            <div className="fav-container">
                <h1>Shop Favorites</h1>
                <div className="fav-optionp-box">
                    {
                        fav.map((item, i) => (
                            <div className="fav-option">
                                <div className="fav-img-box" onClick={() => { singlepage(item) }}>
                                    <img src={item.img} />
                                </div>
                                <div className="fav-text-box">
                                    <h4>{item.price}</h4>
                                    <span>{item.Category}</span>
                                </div>
                                <button onClick={() => AddToCart(item)}>add to cart</button>

                            </div>

                        ))
                    }


                </div>
            </div>

        </>
    )
}

export default Fav