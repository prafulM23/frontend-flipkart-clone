import './Left.css'
const LeftCom = ({ Heading, secondhead, thirdhead }) => {
    return (
        <>
            <div className="login-text-side">
                <div className="login-text-upper">
                    <h1>{Heading}</h1>
                    <h4>
                        {secondhead}<br /> {thirdhead}
                    </h4>
                </div>
                <div className="login-text-down">
                    <img src="public/images/login-img.jpg" alt="" />

                </div>
            </div>
        </>
    )
}
export default LeftCom