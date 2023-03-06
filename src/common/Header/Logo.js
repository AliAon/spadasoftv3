import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Logo=()=>{
    return(
        <div className="logo-img">
            <Link to="/">
            <img src="http://localhost:3000/images/logo/Logo (1).png"/>
            </Link>
        </div>
    )
}
export default Logo