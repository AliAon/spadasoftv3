import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { hostname } from "../../config"

const Logo=()=>{
    return(
        <div className="logo-img">
            <Link to="/">
            <img src={`${hostname}/images/logo/Logo (1).png`}/>
            </Link>
        </div>
    )
}
export default Logo