import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul className="primary-nav-link">
      <Link to="/"><li className="primary-nav-link__a">Home</li></Link>
      <Link to="/about-us"><li className="primary-nav-link__a">About Us</li></Link>
      <Link to="/pages"><li className="primary-nav-link__a">Pages</li></Link>
      <Link to="/services"><li className="primary-nav-link__a">Services</li></Link>
      <Link to="/career"><li className="primary-nav-link__a">Career</li></Link>
      <Link to="/contact"><li className="primary-nav-link__a">Contact</li></Link>
    </ul>
  );
};
export default MainMenu;
