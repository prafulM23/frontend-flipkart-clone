import "./Option.css"
const Option = () => {

    const productoption = [
        {
            name: "Minutes",
            img: "public/bike.png"
        },
        {
            name: "Mobile&Tab",
            img: "public/mobile-tab.png"
        },
        {
            name: "Fashion",
            img: "public/fashion.png"
        },
        {
            name: "Electronics",
            img: "public/lap-air.png"
        },
        {
            name: "Furniture",
            img: "public/furniture.png"
        },
        {
            name: "Appliances",
            img: "public/tvs.png"
        },
        {
            name: "Flight Bookings",
            img: "public/airoplain.png"
        },
        {
            name: "Grocery",
            img: "public/grocery.png"
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