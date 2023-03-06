import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import BlogDetails from "../components/Blog/BlogDetails";
import Cta from "../components/Home/Cta";
import PortfolioDetails from "../components/Portfolio/PortfolioDetails";

const PortfolioDetail = () => {
  return (
    <Fragment>
      <div>
      <Header />
      <HeaderMobile />
      <HeaderCTA
        title="Portfolio Detail Page"
        description="Rebranding awesome company"
      />
      <Container>
        <PortfolioDetails/>
      </Container>
  
      <Container className="cta-container">
        <Cta />
      </Container>
      <Footer />
      <BackToTopBtn />
      </div>
    </Fragment>
  );
};
export default PortfolioDetail;
