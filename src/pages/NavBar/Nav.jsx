import { Link, useNavigate } from "react-router-dom"
import "./Nav.css"
const Nav = () => {
    let navigate = useNavigate()

    const token = localStorage.getItem("token")
    console.log("navbar= ", token)
    const handlelogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        navigate("/")
    }
    const email = localStorage.getItem("email")

    return (
        <>
            <div className="Nav-container">
                <div className="Nav-flip-logo">
                    <div className="Nav-flip-img-box">
                        <Link to="/" ><img src="public/flip-logo.png" alt="Flipcart" /></Link>

                    </div>
                    <div className="nav-sp">
                        <span>Explore </span>
                        <span>Plus </span>
                    </div>
                </div>
                <div className="Nav-search-box">
                    <img src="https://www.svgrepo.com/show/476468/search.svg" alt="" />
                    <input type="search" placeholder="Search for Product, Brands And More" />

                </div>
                <div className="Nav-option-box">
                    {
                        token ? <div className="nav-login-logo">
                            <img src="https://www.svgrepo.com/show/361411/account.svg" alt="" />
                            <span onClick={handlelogout}>Logout</span>
                        </div>

                            : <Link to="/login" className="link">
                                <div className="nav-login-logo">
                                    <img src="https://www.svgrepo.com/show/361411/account.svg" alt="" />
                                    <span>Login</span>
                                </div>
                            </Link>

                    }


                    <Link to="/cart" className="link">
                        <div className="nav-cart-box">
                            <img src="https://www.svgrepo.com/show/521847/shopping-cart.svg" alt="" />
                            <span>Cart</span>

                        </div>
                    </Link>
                    

                </div>
                {/* <Link to="/account" className="link">
                    <div className="nav-login-logo">
                        <img src="https://www.svgrepo.com/show/361411/account.svg" alt="" />
                        <span>{email ? email : "user"}</span>

                    </div>
                </Link> */}

            </div>
        </>
    )
}
export default Nav