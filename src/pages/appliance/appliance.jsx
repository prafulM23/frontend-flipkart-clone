import { useState } from "react"
import "./appliance.css"
import { useNavigate } from "react-router-dom"
const Appliance = () => {
    let navigate = useNavigate()
    const [cart, setcart] = useState(() => {
        const save = localStorage.getItem("flip-cart");
        return save ? JSON.parse(save) : [];
    })
    const Applian = [
        {
            id: 7,
            img: "public/lcd-remo.png",
            price: 30840,
            info: "65/75 inch TVs",
            Category: "Primium LCD",
            Description: "This high-quality LCD screen delivers sharp visuals, vibrant colors, and excellent brightness. Designed for durability and clarity, it provides a smooth viewing experience for videos, games, and daily use. Perfect for smartphones, monitors, or TVs, this LCD ensures energy efficiency and long-lasting performance with crystal-clear display quality."

        },
        {
            id: 8,
            img: "public/washing.jpg",
            price: 20000,
            info: "LG 7Liter POwer Machine",
            Category: "Washing Machine",
            Description: "This washing machine offers powerful cleaning with advanced technology and energy efficiency. Designed for convenience, it ensures gentle care for clothes while removing tough stains. With multiple wash modes, low noise operation, and a stylish design, it delivers fast, effective, and effortless laundry performance for every household."
        },
        {
            id: 9,
            img: "public/microwave.jpg",
            price: 5100,
            info: "5 Star Higher microwve",
            Category: "MicroWave",
            Description: "This microwave oven offers fast and efficient cooking with even heat distribution. Perfect for heating, grilling, and baking, it saves time and energy. With easy-to-use controls, multiple cooking modes, and a sleek modern design, it makes everyday cooking convenient, quick, and delicious for your kitchen."

        },
        {
            id: 10,
            img: "public/AC.jpg",
            price: 25999,
            info: "Best cooling Conditioner",
            Category: "Air Conditioner",
            Description: "This air conditioner provides powerful cooling with energy-efficient performance, keeping your room comfortable even in extreme heat. It features fast cooling technology, low noise operation, and advanced air filters for clean, fresh air. With a sleek design and smart controls, it ensures comfort, style, and convenience all year round."
        },
        {
            id: 11,
            img: "public/mixer.jpg",
            price: 7540,
            info: "Hight Power Bolltage ",
            Category: "Mixer",
            Description: "This mixer grinder offers powerful performance for blending, grinding, and mixing your ingredients with ease. Equipped with sharp stainless-steel blades and multiple speed settings, it ensures smooth results every time. Its durable design, easy operation, and compact size make it perfect for every modern kitchen."
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
            <div className="applian-container">
                <h1>Best Deals On Appliances</h1>
                <div className="applian-optionp-box">
                    {
                        Applian.map((item, i) => (
                            <div className="applian-option">
                                <div className="applian-img-box" onClick={() => { singlepage(item) }}>
                                    <img src={item.img} />
                                </div>
                                <div className="applian-text-box">
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
export default Appliance