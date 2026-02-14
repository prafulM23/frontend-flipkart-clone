import { useState } from "react"
import "./Deals.css"
import { useNavigate } from "react-router-dom"

const Deals = () => {
    let navigate = useNavigate()
    const [cart, setcart] = useState(() => {
        const save = localStorage.getItem("flip-cart");
        return save ? JSON.parse(save) : [];
    })

    const fashion = [

        {
            id: 12,
            img: "public/images/bags.webp",
            price: 840,
            info: "Fully WaterProf Bag",
            Category: "Laptop Bag",
            Description: "This laptop bag combines style, comfort, and protection. Made from durable, water-resistant material, it keeps your laptop safe from scratches and damage. With multiple compartments for accessories and a lightweight design, it’s perfect for travel, office, or college use — ensuring convenience and security on the go."
        },
        {
            id: 13,
            img: "public/images/moniter.webp",
            price: 20000,
            info: "4K HD Amulad display",
            Category: "Monitor",
            Description: "This monitor delivers crystal-clear visuals with vibrant colors and sharp details. Ideal for work, gaming, or entertainment, it offers a wide viewing angle and smooth performance. With an ergonomic design, energy efficiency, and sleek finish, it enhances your workspace while providing a comfortable and immersive viewing experience."
        },
        {
            id: 14,
            img: "public/images/perfuam.webp",
            price: 350,
            info: "Best Every Fragnance",
            Category: "Perfum",
            Description: "This perfume offers a long-lasting, refreshing fragrance that suits every occasion. Its elegant blend of floral, woody, and musky notes creates a unique scent that leaves a lasting impression. Perfect for daily wear or special events, it adds confidence and charm to your personality with every spray."
        },
        {
            id: 15,
            img: "public/images/projecter.webp",
            price: 2259,
            info: "Primum Show With ",
            Category: "Projector",
            Description: "This projector delivers bright, clear, and high-resolution visuals for movies, presentations, and gaming. Its compact design and easy connectivity make it perfect for home, office, or classroom use. Enjoy a cinematic experience anywhere with vibrant colors, sharp details, and powerful sound — ideal for both entertainment and work."
        },
        {
            id: 16,
            img: "public/images/wallClocks.webp",
            price: 300,
            info: "Home Click ",
            Category: "WallClock",
            Description: "This elegant wall clock adds style and functionality to any room. Designed with precise quartz movement for accurate timekeeping, it’s perfect for homes, offices, or classrooms. Its modern yet timeless look complements all interiors while being easy to hang and maintain. A perfect blend of decor and practicality."
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
            <div className="fashion-container">
                <h1>Best Deals </h1>
                <div className="fashion-optionp-box">
                    {
                        fashion.map((item, i) => (
                            <div className="fashion-option">
                                <div className="fashion-img-box" onClick={() => { singlepage(item) }}>
                                    <img src={item.img} />
                                </div>
                                <div className="fashion-text-box">
                                    <h4>{item.price}</h4>
                                    <span>{item.Category}</span>
                                </div>
                                <button onClick={() => AddToCart(item)}>add to cart</button>
                                {/* <button onClick={() => add(item)}>add to cart</button> */}


                            </div>

                        ))
                    }


                </div>
            </div>

        </>
    )
}

export default Deals