import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import BlogDetails from "../components/Blog/BlogDetails";
import Cta from "../components/Home/Cta";

const BlogDetail = () => {
  return (
    <Fragment>
      <div className="portfolio-bg">
      <Header />
      <HeaderMobile />
      <HeaderCTA
        title="Blog Page"
        description="Rebranding awesome company"
      />
      <Container>
        <BlogDetails/>
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
export default BlogDetail;
