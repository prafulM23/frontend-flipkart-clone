import "./sale.css"
import { useNavigate } from "react-router-dom"

const Sale = () => {
    let navigate = useNavigate()


    const saleoption = [
        {
            id: 1,
            info: "Best Deal of 2025",
            Category: " Macbook M2",
            img: "/images/m2_sec.png",
            price: "Just ₹63,990"
        },
        {
            id: 2,
            info: "Best Deal of 2025",
            Category: "zeb,mivi Sound",
            img: "/images/hometheter.png",
            price: "Just ₹3,990"
        },
        {
            id: 3,
            info: "Best Deal of 2025",
            Category: "Philips,Full HD",
            img: "/images/lcd-remo.png",
            price: "Just ₹30,990"
        }
    ]
    const singlepage = (product) => {
        navigate("/product", { state: product })

    }
    return (
        <>
            <div className="sale-container">
                {
                    saleoption.map((item, i) => (
                        <div className="sale-box1" onClick={() => { singlepage(item) }}>
                            <div className="sale-img-box">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="sale-text">
                                <span>{item.info}</span>
                                <h2>{item.Category}</h2>
                                <span>{item.price}</span>
                            </div>

                        </div>

                    ))
                }


            </div>

        </>
    )
}
export default Sale;