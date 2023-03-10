import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import JobSearch from "../components/Career/JobSearch";
import Brand from "../components/Home/Brand";
import JobCard from "../common/cards/JobCard";
import Cta from "../components/Home/Cta";
import JobsList from "../components/Career/JobsList";
import UpCommingEvents from "../components/Career/UpCommingEvents";
import { hostname } from "../config";
import HeaderCTATwo from "../common/HeaderCTATwo";
import JobDetailOverview from "../components/Career/JobDetailOverview";
import JobApplyOverview from "../components/Career/JobApplyOverview";
const ApplyJob = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />

      <HeaderCTATwo
        title="Apply Job"
        description="Rebranding awesome company"
      />
      <JobApplyOverview/>
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
export default ApplyJob;
