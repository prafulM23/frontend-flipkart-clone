import "./App.css"
import Home from "./pages/Home"
import { Route, Routes, useLocation } from "react-router-dom"
import Nav from "./pages/NavBar/Nav"
import Foot from "./pages/footer/foot"
import Login from "./pages/Login/Login"
import Sign_up from "./pages/SignUp/Sign_up"
import Cart from "./pages/Cart/Cart"
import { useState } from "react"
import Product from "./pages/single_item/product"
import Order from "./pages/order/order"

const App = () => {
  const demo = useLocation();
  const [cartList, setCartList] = useState([])

  if (demo.pathname == "/cart") {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home setCartList={setCartList} cartList={cartList} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign" element={<Sign_up />}></Route>
          <Route path="/cart" element={<Cart cartList={cartList} />}></Route>
        </Routes>
      </>
    )

  }
  else {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home setCartList={setCartList} cartList={cartList} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign" element={<Sign_up />}></Route>
          <Route path="/cart" element={<Cart cartList={cartList} />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
        <Foot />
      </>
    )
  }
}
export default App