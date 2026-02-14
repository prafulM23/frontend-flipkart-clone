import "./sell-nav.css"
const Sell_Nav = () => {
    return (
        <>
            <div className="seller-full-box">
                <div className="seller-top">
                    <p>Existing Seller? Explore our product recommendations with Dhamaka Selection</p>

                </div>
                <hr />
                <nav className="seller-nav-box" >
                    <div className="seller-nav-left" >
                        <img src="/images/flip-seller.jpg" alt="" />
                        <div className="seller-nav-left-text-box">
                            <span>Sell Online</span>
                            <span>Fees and Commission</span>
                            <span>Grow</span>
                            <span>Learn</span>
                            <span>Shopsy</span>

                        </div>

                    </div>
                    <div className="seller-nav-right">
                        <span>Login</span>
                        <button>Start Selling</button>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Sell_Nav 