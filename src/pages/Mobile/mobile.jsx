import { useState } from "react"
import "./mobile.css"

import { useNavigate } from "react-router-dom"

const Mobile = () => {
    const [cart, setcart] = useState(() => {
        const save = localStorage.getItem("flip-cart");
        return save ? JSON.parse(save) : []
    })

    let navigate = useNavigate()

    const mobileoption = [
        {
            id: 1,
            info: "I Phone16",
            img: "/images/i phone16.jpg",
            price: 69000,
            Category: "Apply Mobile",
            Description: "This smartphone offers a powerful processor, stunning display, long-lasting battery, and advanced camera features. Its sleek design, fast performance, and user-friendly interface make it perfect for work, entertainment, and photography. Whether Android or iPhone, it ensures smooth multitasking, strong security, and an overall premium mobile experience."

        },
        {
            id: 2,
            info: "Google Pixal9",
            img: "/images/googlepix9.jpg",
            price: 79999,
            Category: "Google Mobile",
            Description: "This smartphone offers a powerful processor, stunning display, long-lasting battery, and advanced camera features. Its sleek design, fast performance, and user-friendly interface make it perfect for work, entertainment, and photography. Whether Android or iPhone, it ensures smooth multitasking, strong security, and an overall premium mobile experience."

        },
        {
            id: 3,
            info: "I Phone 16pro",
            img: "/images/i phone 16proEd.jpg",
            price: 105990,
            Category: "Apply Mobile",
            Description: "This smartphone offers a powerful processor, stunning display, long-lasting battery, and advanced camera features. Its sleek design, fast performance, and user-friendly interface make it perfect for work, entertainment, and photography. Whether Android or iPhone, it ensures smooth multitasking, strong security, and an overall premium mobile experience."

        },
        {
            id: 4,
            info: "Galaxy S24",
            img: "/images/galaxy24.jpg",
            price: 33999,
            Category: "Samsung Mobile",
            Description: "This smartphone offers a powerful processor, stunning display, long-lasting battery, and advanced camera features. Its sleek design, fast performance, and user-friendly interface make it perfect for work, entertainment, and photography. Whether Android or iPhone, it ensures smooth multitasking, strong security, and an overall premium mobile experience."

        },
        {
            id: 5,
            info: "I Phone 14",
            img: "/images/i phone14.jpg",
            price: 54999,
            Category: "Apply Mobile",
            Description: "This smartphone offers a powerful processor, stunning display, long-lasting battery, and advanced camera features. Its sleek design, fast performance, and user-friendly interface make it perfect for work, entertainment, and photography. Whether Android or iPhone, it ensures smooth multitasking, strong security, and an overall premium mobile experience."

        },
        {
            id: 6,
            info: "I Phone 17pro",
            img: "/images/i phone17pro.jpg",
            price: 150000,
            Category: "Apply Mobile",
            Description: "This smartphone offers a powerful processor, stunning display, long-lasting battery, and advanced camera features. Its sleek design, fast performance, and user-friendly interface make it perfect for work, entertainment, and photography. Whether Android or iPhone, it ensures smooth multitasking, strong security, and an overall premium mobile experience."

        }

    ]

    const AddToCart = (product) => {
        const exist = cart.find((p) => p.id === product.id)
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
            <div className="mobile-full-container">
                <div className="mobile-box" >
                    <h1>Best Deals On SmartPhones</h1>
                    <div className="mobile-option">
                        {
                            mobileoption.map((item, i) => (
                                <div className="mobile-item-box">
                                    <div className="mobile-img-box" onClick={() => { singlepage(item) }}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <span>{item.info}</span>
                                    <span>{item.price}</span>
                                    <button className="mobile-btn" onClick={() => AddToCart(item)}>add to cart</button>

                                </div>

                            ))
                        }


                    </div>
                </div>

                <div className="mobile-side-box" onClick={singlepage}>
                    <h1>i Phone17 pro</h1>
                    <div className="mobile-side-img" >
                        <img src="/images/i phone17 remove.png" alt="" />
                    </div>

                    <div className="mobile-side-text" >

                        <span>Price:150000</span>
                        <p>Best phone of the year</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mobile