import { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import AllCategoryTabContent from "../../common/AllCategoryTabContent";
import DevelopmentTabContent from "../../common/DevelopmentTabContent";
import ReadMoreBlock from "../../common/ReadMoreBlock";
import TabView from "../../common/TabView";
const SelectedWork = () => {
  const [tabindex, settabindex] = useState(0);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const showTabDatahandler = (e) => {
    const licollection=e.target.closest('.react-multi-carousel-track').querySelectorAll('.SelectedWork_ul__li')
    licollection.forEach(element => {
      element.classList.remove('active')
    });
    settabindex(e.target.dataset.cateid);
    e.target.classList.add('active')
  };
  return (
    <Fragment>
      <section className="SelectedWork-section ">
        <Row className="SelectedWork-row removespacing">
          <h2 className="SelectedWork__title ">Selected Works</h2>
          <Row className="removespacing">
            <Col>
              <Carousel
                responsive={responsive}
                arrows={false}
                containerClass="SelectedWork_ul__li_container"
                itemClass="SelectedWork_ul_item"
              >
                <li
                  className="SelectedWork_ul__li active"
                  data-cateid="0"
                  onClick={showTabDatahandler}
                >
                  All Category
                  </li>
                <li
                  className="SelectedWork_ul__li"
                  data-cateid="1"
                  onClick={showTabDatahandler}
                >
                  Development
                </li>
                <li
                  className="SelectedWork_ul__li"
                  data-cateid="2"
                  onClick={showTabDatahandler}
                >
                  Graphic Design
                </li>
                <li
                  className="SelectedWork_ul__li"
                  data-cateid="3"
                  onClick={showTabDatahandler}
                >
                  Motion Effects
                </li>
                <li
                  className="SelectedWork_ul__li"
                  data-cateid="4"
                  onClick={showTabDatahandler}
                >
                  UI / UX Design
                </li>
                <li
                  className="SelectedWork_ul__li"
                  data-cateid="5"
                  onClick={showTabDatahandler}
                >
                  Branding
                </li>
              </Carousel>
            </Col>
          </Row>
          <TabView
            index={tabindex}
            tabs={[
              {
                name: "allCategories",
                content: <AllCategoryTabContent />,
              },
              {
                name: "development",
                content: <DevelopmentTabContent />,
              },
              {
                name: "graphicdesign",
                content: <DevelopmentTabContent />,
              },
              {
                name: "motion",
                content: <DevelopmentTabContent />,
              },
              {
                name: "ui/ux",
                content: <DevelopmentTabContent />,
              },
              {
                name: "branding",
                content: <DevelopmentTabContent />,
              }
            ]}
          />
        </Row>
      </section>
    </Fragment>
  );
};
export default SelectedWork;
