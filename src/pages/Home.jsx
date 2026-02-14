import Appliance from "./appliance/appliance"
import Banner from "./Banner/Banner"
import Deals from "./Deals/Deals"
import Fav from "./favorites/fav"
import Flex from "./flex/flex"
import Mobile from "./Mobile/mobile"
import Option from "./Options/Option"
import Sale from "./sale/sale"
import { useState } from "react"
import Product from "./single_item/product"

const Home = ({ setCartList, cartList }) => {

  const handleAddToCart = (item) => {
    setCartList([...cartList, item])
    // console.log(item)
  }


  return (
    <>

      <Option />
      <Banner />
      <Mobile AddToCart={handleAddToCart} />
      <Sale AddToCart={handleAddToCart} />
      <Appliance AddToCart={handleAddToCart} />
      <Deals AddToCart={handleAddToCart} />
      <Fav AddToCart={handleAddToCart} />
      <Flex AddToCart={handleAddToCart} />



    </>
  )
}
export default Home