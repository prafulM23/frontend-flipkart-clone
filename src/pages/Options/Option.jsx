import "./Option.css"
const Option = () => {

    const productoption = [
        {
            name: "Minutes",
            img: "public/images/bike.png"
        },
        {
            name: "Mobile&Tab",
            img: "public/images/mobile-tab.png"
        },
        {
            name: "Fashion",
            img: "public/images/fashion.png"
        },
        {
            name: "Electronics",
            img: "public/images/lap-air.png"
        },
        {
            name: "Furniture",
            img: "public/images/furniture.png"
        },
        {
            name: "Appliances",
            img: "public/images/tvs.png"
        },
        {
            name: "Flight Bookings",
            img: "public/images/airoplain.png"
        },
        {
            name: "Grocery",
            img: "public/images/grocery.png"
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