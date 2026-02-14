import "./Option.css"
const Option = () => {

    const productoption = [
        {
            name: "Minutes",
            img: "/images/bike.png"
        },
        {
            name: "Mobile&Tab",
            img: "/images/mobile-tab.png"
        },
        {
            name: "Fashion",
            img: "/images/fashion.png"
        },
        {
            name: "Electronics",
            img: "/images/lap-air.png"
        },
        {
            name: "Furniture",
            img: "/images/furniture.png"
        },
        {
            name: "Appliances",
            img: "/images/tvs.png"
        },
        {
            name: "Flight Bookings",
            img: "/images/airoplain.png"
        },
        {
            name: "Grocery",
            img: "/images/grocery.png"
        },

    ]
    return (
        <>
            <div className="Option-container">
                {
                    productoption.map((item, i) => (

                        <div className="option-item-box">

                            <div className="option-img-box" >
                                <img src={item.img} alt="" />
                            </div>

                            <h5>{item.name}</h5>
                        </div>

                    ))

                }
            </div>
        </>
    )
}
export default Option