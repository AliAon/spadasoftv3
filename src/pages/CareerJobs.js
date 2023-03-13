import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import JobSearch from "../components/Career/JobSearch";
import Brand from "../components/Home/Brand";
import Cta from "../components/Home/Cta";
import JobsList from "../components/Career/JobsList";
import UpCommingEvents from "../components/Career/UpCommingEvents";
const CareerJobs = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />
      <HeaderCTA title="Jobs" description="Rebranding awesome company" />
      <Container>
        <JobSearch />
        <JobsList/>
        <UpCommingEvents/>
      </Container>
      <Container>
        <Brand />
      </Container>
      <Container className="cta-container">
        <Cta />
      </Container>
      <Footer />
      <BackToTopBtn />
    </Fragment>
  );
};
export default CareerJobs;
