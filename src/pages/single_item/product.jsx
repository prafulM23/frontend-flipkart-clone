import { useLocation, useNavigate } from "react-router-dom"
import "./product.css"
const Product = () => {
    let naviagte = useNavigate()
    let location = useLocation()
    let product_detail = location.state;
    let token = localStorage.getItem("token")


    console.log(product_detail)

    const handleBuy = (item) => {
        console.log("order", item)
        if (token) {
            naviagte("/order", { state: item })
        } else {
            naviagte("/login")
        }

    }


    return (
        <>
            <div className="product-box">
                <div className="product-img-section">
                    <div className="product-img">
                        <img src={product_detail.img} alt="" />
                    </div>
                    <div className="product-img-btnbox">
                        <button>AddToCart</button>
                        <button onClick={() => handleBuy(product_detail)}>Buy Now</button>
                    </div>
                </div>
                <div className="product-detail-section">

                    <p>{product_detail.info}</p>
                    <div className="product-price-box">
                        <h4>Spacial Price</h4>
                        <div className="product-price-box2">
                            <span>{product_detail.price} </span>
                            <p>25% Of</p>
                        </div>
                        <span>Or Pay {product_detail.price} +  100</span>

                    </div>
                    <div className="product-offer-box">
                        <h3>Available offers</h3>
                        <ol>
                            <li> <span>A -</span> Bank Offer5% cashback on Axis Bank Flipkart Debit Card up to ₹750 <span>T&C</span></li>
                            <li> <span>B -</span> Bank Offer5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter  <span>T&C</span></li>
                            <li> <span>C -</span> Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter<span>T&C</span></li>

                        </ol>

                    </div>
                    {
                        product_detail.Capacity ? <div className="product-capacity-box">
                            <h2>Capacity - </h2>
                            <p>6 kg</p>
                            <p>6.5kg</p>
                            <p>7kg</p>
                            <p>7.5kg</p>
                            <p>8kg</p>
                        </div> : ""
                    }

                    <div className="product-description-box">
                        <h2>Description  </h2>
                        <p>{product_detail.Description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product