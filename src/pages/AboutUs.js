import { Fragment } from "react";
import { Container } from "react-bootstrap";
import BackToTopBtn from "../common/BackToTopBtn";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderCTA from "../common/HeaderCTA";
import HeaderMobile from "../common/HeaderMobile";
import About from "../components/Home/About";
import Brand from "../components/Home/Brand";
import Cta from "../components/Home/Cta";
import FeaturedWork from "../components/Home/FeaturedWork";
import Hero from "../components/Home/Hero";
import OurServices from "../components/Home/OurServices";
import Process from "../components/Home/Process";
import Testimonials from "../components/Home/Testimonials";
import AboutDetails from "../components/About/AboutDetails";
import WhoWeAre from "../components/About/WhoWeAre";
import AchievementsCounter from "../components/About/AchievementsCounter";
import OurTeam from "../components/About/OurTeam";
import TestimonailQuote from "../components/About/TestimonailQuote";
const AboutUs = () => {
  return (
    <Fragment>
      <Header />
      <HeaderMobile />
      <HeaderCTA
        title="About Us"
        description="We are creative digital websites"
      />
      <Container>
        <AboutDetails
          title=" We Are Passionate About Your Online Success."
          description1=" Our dedicated team of ambitious and hardworking people will become
          your trusted colleagues, who’s passion is to make your business or
          project a success! We aren’t happy with our creation until you are. We
          are true to ourselves, and commit to always perform at our best."
          text="WE AREN’T HAPPY WITH OUR CREATION UNTIL YOU ARE. WE TAKE TREMENDOUS CARE OF YOUR NEEDS."
          description2="With more than 10-years experience, our team plan and create strategy every single detail to make sure to bring you the best and effective solution for your business. Brand identities, digital platforms ecommerce flagships, and branded Capabilities content that bring culture and commerce together."
        />
      </Container>
      <Container fluid className="section__WhoWeAre">
        <Container>
          <WhoWeAre />
        </Container>
      </Container>

      <Container>
        <AchievementsCounter />
        <TestimonailQuote />
      </Container>
      <Container fluid className="section__WhoWeAre">
        <Container>
          <OurTeam />
        </Container>
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
export default AboutUs;
