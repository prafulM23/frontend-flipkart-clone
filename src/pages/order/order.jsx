import { useLocation, useNavigate } from "react-router-dom"
import "./order.css"
const Order = () => {
    const navigate = useNavigate()
    let email = localStorage.getItem("email")
    let location = useLocation()
    let product_detail = location.state;
    console.log(product_detail)
    const changelogin = () => {
        navigate("/login")

    }
    return (
        <>
            <div className="order-full-container">
                <div className="order-login">
                    <h3>
                        <label>1</label>LOGIN : <span>{email}</span>
                    </h3>
                    <button className="order-btn" onClick={changelogin}>CHANGE</button>
                </div>

                <div className="order-detail">
                    <div className="order-nav">
                        <p>2</p>
                        <h2>PRODUCT DETAIL</h2>
                    </div>

                    <div className="order-box">

                        <div className="order-img-box">
                            <img src={product_detail.img} />
                        </div>
                        <div className="order-product-detail">
                            <h1>{product_detail.info}</h1>
                            <p>{product_detail.price}</p>
                            <h4>{product_detail.Category}</h4>
                            <button className="order-btn">PAY-NOW</button>
                        </div>

                    </div>
                    <div className="order-address-box">
                        <h4 style={{ fontFamily: "sans-serif", display: "flex", gap: "10px" }}><span style={{ color: "blue", width: "20px", height: "20px", textAlign: "center", backgroundColor: "rgba(128, 128, 128, 0.203)" }}>3</span>ADDRESS</h4>
                        <div className="order-text-box">
                            <input type="radio" />

                            <h4>Praful Malviya</h4>
                            <p>Sachin Pan Palas man road bus stand,Nanasa,Kannod, Madhya Pradesh-</p>
                            <h5>455332</h5>
                            <button className="order-btn">EDIT</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Order