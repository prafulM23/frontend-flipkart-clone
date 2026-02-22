import { useState } from "react"
import LeftCom from "../../component/LeftCom/Left"
import axios from "axios"
import "./Sign.css"
import Otp from "../../component/OTP/otp"
import { useNavigate } from "react-router-dom"
const BASE_URL = import.meta.env.VITE_BASE_URL

const Sign_up = () => {
    const [email, setemail] = useState("")
    const [output, setoutput] = useState(false);
    const [otp, setotp] = useState(Array(4).fill(""));
    const [otpbox, setotpbox] = useState(false)
    let navigate = useNavigate()


    console.log(BASE_URL, "urllllllllllllllllllllllllllllllllllllllll")

    const handlesign = async () => {
        try {
            if (email === "") return (setoutput("Missing Email"))
            const res = await axios.post(`${BASE_URL}/sign`, { email })
            console.log(res.status)
            if (res.status == 200) {
                localStorage.setItem("email", email)
                setotpbox(true);
                setemail("")
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
            const res = await axios.post(`${BASE_URL}/verify`, { getemail, getotp })
            console.log(res.data.token)
            if (res.status == 200) {
                localStorage.setItem("token", res.data.token)
                setoutput(
                    <p style={{ color: "green" }}>{res.data.msg}</p>
                )
                navigate("/cart")
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
            <div className="sign-full-box">
                <div className="sign-box">
                    <LeftCom Heading="Looks like you're new here!" secondhead="Sign up with your mobile number to get started" />
                    {
                        otpbox ? <>
                            <div className="sign-otp-box" >
                                <p>Enter Your OTP</p>
                                {output ? <p style={{ color: "red" }}>{output}</p> : ""}

                                <Otp length={4} otp={otp} setotp={setotp} />
                                <button onClick={handleVerify}><b>Verify OTP</b></button>

                            </div>

                        </>

                            : <div className="sign-main-side">
                                <div className="sign-input-box">
                                    {output ? <p style={{ color: "red" }}>{output}</p> : ""}
                                    <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => { setemail(e.target.value); setoutput(false) }} />
                                    <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                    <button onClick={handlesign}><b>Continue</b> </button>
                                </div>
                            </div>

                    }


                </div>
            </div>
        </>
    )
}
export default Sign_up