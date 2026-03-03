// Login Page Component - Flipkart Clone
// Handles user login via email + OTP verification
import { useState } from "react";
import LeftCom from "../../component/LeftCom/Left"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import Otp from "../../component/OTP/otp"
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

const Login = () => {
    // Page headings
    let headname = "Login";
    let head2 = "Get access to your Orders,";
    let head3 = " Wishlist and Recommendations";

    let navigate = useNavigate()

    // OTP input state (4 digit)
    const [otp, setotp] = useState(Array(4).fill(""))
    // Show OTP input box after email submit
    const [otpbox, setotpbox] = useState(false)
    // Store user email input
    const [email, setemail] = useState("")
    // Show success or error message
    const [output, setoutput] = useState(false)
    //set Loading
    const [loading, setLoading] = useState(false)

    // Navigate to signup page
    const sign = () => {
        navigate("/sign")
    }

    // Handle user login request and send OTP
    const handlelogin = async () => {
        try {
            // Remove spaces and convert email to lowercase
            const cleanEmail = email.trim().toLocaleLowerCase();

            // Validate email
            if (!cleanEmail) {
                return (setoutput(<p style={{ color: "red" }}>Email is required</p>))
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(cleanEmail)) {
                return setoutput("Invalid Email Format");
            }

            setLoading(true)

            // Send login request to backend
            const res = await axios.post(`${BASE_URL}/login`, { email: cleanEmail })
            console.log(res.data)

            // On success show OTP input
            if (res.status == 200) {
                localStorage.setItem("email", cleanEmail);
                setoutput(<p style={{ color: "green" }}>{res.data.msg}</p>)
                setLoading(false)
                setotpbox(true)
            }

        } catch (error) {

            console.log(error)
            setLoading(false)
            if (error.response) {
                setoutput(<p style={{ color: "red" }}>{error.response?.data?.msg}</p>)
            } else {
                setoutput(<p style={{ color: "red" }}>Server Not Response</p>)
            }
        }
    }

    // Verify OTP and generate JWT token
    const handleVerify = async () => {

        try {
            // Get stored email from localStorage
            const getemail = localStorage.getItem("email")
            // Combine OTP array into string
            const getotp = otp.join("")
            console.log(getemail, getotp);
            setLoading(true)
            const res = await axios.post(`${BASE_URL}/verify`, { getemail, getotp })
            console.log(res.data.token)
            if (res.status == 200) {
                localStorage.setItem("token", res.data.token)
                setoutput(<p style={{ color: "green" }}>{res.data.msg}</p>)
                navigate("/")
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

    return (
        <>
            <div className="login-full-box">
                <div className="login-box">
                    {/* Left Side UI */}
                    <LeftCom Heading={headname} secondhead={head2} thirdhead={head3} />

                    {/* Show OTP UI if otpbox is true else show email input */}
                    {otpbox ? <>
                        <div className="sign-otp-box" >
                            <p>Enter Your OTP</p>
                            {output ? <p>{output}</p> : ""}

                            {/* OTP Input Component */}
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
                            {/* Redirect to Signup */}
                            <h4 onClick={sign}>New to Flipkart? Create an account</h4>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

// Export Login Component
export default Login