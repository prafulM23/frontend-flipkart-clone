// Signup Component - Handles user registration via Email + OTP
import { useState } from "react"
import LeftCom from "../../component/LeftCom/Left"
import axios from "axios"
import "./Sign.css"
import Otp from "../../component/OTP/otp"
import { useNavigate } from "react-router-dom"

const BASE_URL = import.meta.env.VITE_BASE_URL

const Sign_up = () => {
    let navigate = useNavigate()

    // Store user email input
    const [email, setemail] = useState("")
    // Show success or error message
    const [output, setoutput] = useState(false);
    // OTP input state (4 digit)
    const [otp, setotp] = useState(Array(4).fill(""));
    // Show OTP input box after email submit
    const [otpbox, setotpbox] = useState(false)
    //set Loading
    const [loading, setLoading] = useState(false)

    // Handle Signup and Send OTP
    const handlesign = async () => {
        try {
            // Remove spaces and convert email to lowercase
            const cleanEmail = email.trim().toLowerCase();

            // Validate email
            if (!cleanEmail) return setoutput("Email is required");

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(cleanEmail)) return setoutput("Invalid Email Format");

            setLoading(true)

            // Send Sign request to backend
            const res = await axios.post(`${BASE_URL}/sign`, { email: cleanEmail })
            console.log(res.status)
            if (res.status == 200) {
                localStorage.setItem("email", cleanEmail);
                setotpbox(true);
                setemail("")
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
            if (error.response) {
                setoutput(<p style={{ color: "red" }}>{error.response?.data?.msg}</p>)
            }
            else {
                setoutput(<p style={{ color: "red" }}>Server Not Response</p>)
            }
        }
    }

    // Verify OTP and generate JWT token
    const handleVerify = async () => {
        try {
            const getemail = localStorage.getItem("email")
            const getotp = otp.join("")
            console.log(getemail, getotp);

            setLoading(true)

            const res = await axios.post(`${BASE_URL}/verify`, { getemail, getotp })
            console.log(res.data.token)

            if (res.status == 200) {
                localStorage.setItem("token", res.data.token)
                setoutput(<p style={{ color: "green" }}>{res.data.msg}</p>)
                navigate("/cart")
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
            if (error.response) {
                setoutput(<p style={{ color: "red" }}>{error.response.data.msg}</p>)
            }
            else {
                setoutput(<p style={{ color: "red" }}>Server Not Response</p>)
            }
        }
    }

    return (
        <>
            <div className="sign-full-box">
                <div className="sign-box">
                    {/* Left Side UI */}
                    <LeftCom Heading="Looks like you're new here!" secondhead="Sign up with your mobile number to get started" />

                    {/* Show OTP UI if otpbox is true else show email input */}
                    {otpbox ? <>
                        <div className="sign-otp-box" >
                            <p>Enter Your OTP</p>
                            {output ? <p style={{ color: "red" }}>{output}</p> : ""}

                            {/* OTP Input Component */}
                            <Otp length={4} otp={otp} setotp={setotp} />

                            <button onClick={handleVerify}><b>{loading ? "Loading..." : "Verify OTP"}</b></button>
                        </div>
                    </>
                        : <div className="sign-main-side">
                            <div className="sign-input-box">
                                {output ? <p style={{ color: "red" }}>{output}</p> : ""}
                                <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => { setemail(e.target.value); setoutput(false) }} />
                                <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                <button onClick={handlesign}> <b>{loading ? "Sending OTP..." : "Continue"}</b> </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

// Export Login Component
export default Sign_up