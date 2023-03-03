import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul className="primary-nav-link">
      <Link to="/"><li className="primary-nav-link__a">Home</li></Link>
      <Link to="/about-us"><li className="primary-nav-link__a">About Us</li></Link>
      <Link to="/services"><li className="primary-nav-link__a">Services</li></Link>
      <Link to="/portfolio"><li className="primary-nav-link__a">Portfolio</li></Link>
      <Link to="/blog"><li className="primary-nav-link__a">Blog</li></Link>
      <Link to="/our-team"><li className="primary-nav-link__a">Our Team</li></Link>
      <Link to="/contact-us"><li className="primary-nav-link__a">Contact</li></Link>
    </ul>
  );
};
export default MainMenu;
