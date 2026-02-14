import { useState } from "react";
import LeftCom from "../../component/LeftCom/Left"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import Otp from "../../component/OTP/otp"
import axios from "axios";

const Login = () => {
    let headname = "Login";
    let head2 = "Get access to your Orders,";
    let head3 = " Wishlist and Recommendations";
    const [otp, setotp] = useState(Array(4).fill(""))
    const [otpbox, setotpbox] = useState(false)
    const [email, setemail] = useState("")
    const [output, setoutput] = useState(false)

    let navigate = useNavigate()
    const sign = () => {
        navigate("/sign")

    }
    const handlelogin = async () => {
        try {
            if (!email) {
                return (setoutput(<p style={{ color: "red" }}>Email Missing</p>))
            }
            const res = await axios.post("http://localhost:8099/login", { email })
            console.log(res.data)
            if (res.status == 200) {
                localStorage.setItem("email", email)
                setoutput(<p style={{ color: "green" }}> {res.data.msg}</p>)
                setotpbox(true)
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                setoutput(
                    <p style={{ color: "red" }}>{error.response.data.msg}</p>
                )
            }
            else {
                setoutput(
                    <p style={{ color: "red" }}>Server Not Response</p>
                )
            }
        }
    }
    const handleVerify = async () => {
        try {
            const getemail = localStorage.getItem("email")
            const getotp = otp.join("")
            console.log(getemail, getotp);
            const res = await axios.post("http://localhost:8099/verify", { getemail, getotp })
            console.log(res.data.token)
            if (res.status == 200) {
                localStorage.setItem("token", res.data.token)
                

                setoutput(
                    <p style={{ color: "green" }}>{res.data.msg}</p>
                )
                // localStorage.removeItem("email")
                navigate("/")

            }

        } catch (error) {
            console.log(error)
            if (error.response) {
                setoutput(
                    <p style={{ color: "red" }}>{error.response.data.msg}</p>
                )
            }
            else {
                setoutput(
                    <p style={{ color: "red" }}>Server Not Response</p>
                )
            }
        }
    }
    return (
        <>
            <div className="login-full-box">
                <div className="login-box">
                    <LeftCom Heading={headname} secondhead={head2} thirdhead={head3} />
                    {
                        otpbox ? <>
                            <div className="sign-otp-box" >
                                <p>Enter Your OTP</p>
                                {output ? <p>{output}</p> : ""}

                                <Otp length={4} otp={otp} setotp={setotp} />
                                <button onClick={handleVerify}><b>Verify OTP</b></button>

                            </div>

                        </>
                            : <div className="login-main-side">
                                <div className="login-input-box">
                                    {output ? <p>{output}</p> : ""}
                                    <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => { setemail(e.target.value); setoutput(false) }} />
                                    <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                    <button onClick={handlelogin}><b>Request OTP</b> </button>
                                </div>
                                <h4 onClick={sign}>New to Flipkart? Create an account</h4>

                            </div>
                    }

                </div>
            </div>
        </>
    )
}
export default Login