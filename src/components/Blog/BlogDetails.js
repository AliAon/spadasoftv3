import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import SocialLinks from "../../common/Header/TopBarElements/SocialLinks";
import AllBlogsGridTabContent from "./AllBlogsGridTabContent";

const BlogDetails = () => {
  return (
    <Fragment>
      <Row className="blog-details-section removespacing">
        <Col lg={3}>
          <strong className="blog_details_description">08.08.2021</strong> -
          <strong className="blog_details_description">4 minutes Ago</strong>
        </Col>
        <Col lg={9}>
          <p className="blog_details_description">
            Seamlessly syndicate cutting-edge architectures rather than
            collaborative collaboration and idea-sharing. Proactively incubate
            visionary interfaces whereas premium benefits. Seamlessly negotiate
            ubiquitous leadership skills rather than parallel ideas.
            Dramatically visualize superior interfaces for best-of-breed
            alignments. Synergistically formulate performance based users
            through customized relationships. Interactively deliver
            cross-platform ROI via granular systems. Intrinsicly enhance
            effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
            monetize market-driven opportunities with multifunctional users.
            Collaboratively enhance visionary opportunities through
            revolutionary schemas. Progressively network just in time customer
            service without real-time scenarios. <br />
            <br />
            <ul>
              <li>
                Synergistically drive e-business leadership with unique synergy.
                Compt positioning markets.
              </li>
              <li>
                Proactively myocardinate timelyouoptimize enabled core
                competencies for leading-edge sources
              </li>
              <li>
                Professionally enhance stand-alone leadership with innovative
                synergy.
              </li>
              <li>
                generate backend experiences vis-a-vis long-term high-impact
                relationships.
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <Row className="pt--30 pb--30 removespacing">
        <Col lg={3}></Col>
        <Col>
          <img
            src="http://localhost:3000/images/blogs/Image 1.png"
            className="w-100"
          />
        </Col>
        <Col>
          <img
            src="http://localhost:3000//images/blogs/Image 2 (1).png"
            className="w-100"
          />
        </Col>
      </Row>
      <Row className="removespacing">
        <Col lg={3}></Col>
        <Col>
          <p className="blog_details_description">
            Efficiently empower seamless meta-services with impactful
            opportunities. Distinctively transition virtual outsourcing with
            focused e-tailers.
            <br /> <br />
            <span
              className="quotetitle"
              style={{
                color: "#1AB700",
              }}
            >
              <strong>
                “ Monotonectally seize superior mindshare rather than efficient
                technology. ”
              </strong>
            </span>
            <br /> <br />
            Compellingly enhance seamless resources through competitive content.
            Continually actualize 24/365 alignments for resource-leveling
            platforms. Energistically enhance high standards in models and
            professional expertise. Intrinsicly iterate extensible metrics for
            prospective opportunities. Continually develop leading-edge
            experiences through quality e-services.
          </p>
        </Col>
      </Row>
      <Row className="removespacing">
        <Col lg={3}></Col>
        <Col>
          <ul className="cardFive__category">
            <li>
              <button>ADVENTURE</button>
            </li>
            <li>
              <button>PHOTO</button>
            </li>
            <li>
              <button>DESIGN</button>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="removespacing">
        <Col lg={3}></Col>
        <Col>
          <hr
            style={{
              backgroundColor: "#C4C4C4",
              height: "3px",
            }}
          ></hr>
        </Col>
      </Row>
      <Row className="pt--20 pb--20 removespacing">
        <Col lg={3}></Col>
        <Col>
          <Row className="gy-4">
            <Col lg={9} md={6} xs={12}>
              <Row>
                <Col lg={1} xs={2}>
                  <img
                    src="/images/blogs/Ellipse 4 (1).png"
                    className="mr--20"
                  />
                </Col>
                <Col lg={11} xs={8}>
                  <h6 className="cardFive__name">By Jennifer Lawrence</h6>
                  <p className="cardFive__designation">Thinker & Designer</p>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={6} xs={5}>
              <SocialLinks color="#495057" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        className="pt--30 pb--30 removespacing"
        style={{
          backgroundColor: "#1ab7000f",
          borderRadius: "5px",
          padding: "20px",
          marginBottom:"40px"
        }}
      >
        <Col>
          <h4>Related Posts</h4>
          <AllBlogsGridTabContent />
        </Col>
      </Row>
    </Fragment>
  );
};
export default BlogDetails;
