import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import Brand from "../components/Home/Brand";
import Cta from "../components/Home/Cta";
import AboutDetails from "../components/About/AboutDetails";
import ServicesGrid from "../components/Services/ServicesGrid";
import SelectedWork from "../components/Portfolio/SelectedWork";

const Blog = () => {
  return (
    <Fragment>
      <div className="portfolio-bg">
      <Header />
      <HeaderMobile />
      <HeaderCTA
        title="Blog"
        description="Rebranding awesome company"
      />
      <Container>
      <SelectedWork/>
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
export default Blog;
