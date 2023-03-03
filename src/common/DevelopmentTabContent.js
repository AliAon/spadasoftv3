import { Fragment, useState } from "react";
import {Row,Col} from "react-bootstrap"
import ReadMoreBlock from "./ReadMoreBlock";
const DevelopmentTabContent = (props) => {
  return (
    <Fragment>
      <Row className="SelectedWork-category-section gx-5 gy-4 align-items-center removespacing">
        <Col lg={6} md={6} sm={12} xs={12}>
          <figure className="fig-img">
            <img
              src="./images/portfolio/real-estate.png"
              className="w-100 gird_image"
            />
          </figure>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <ReadMoreBlock
            title="Real estate Template"
            description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet."
            subtitle=""
          />
        </Col>
      </Row>
      <Row className="SelectedWork-category-section gx-5 gy-4 align-items-center removespacing">
        <Col lg={6} md={6} sm={12} xs={12}>
          <ReadMoreBlock
            title="Plant identification app"
            description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet."
            subtitle="Mobile App"
          />
        </Col>
        <Col lg={6} md={6}  sm={12} xs={12}>
          <figure className="fig-img">
            <img
              src="./images/portfolio/plants.png"
              className="w-100 gird_image"
            />
          </figure>
        </Col>
      </Row>
      <Row className="SelectedWork-category-section gx-5 gy-4 align-items-center removespacing">
        <Col lg={6} md={6} sm={12} xs={12}>
          <figure className="fig-img">
            <img
              src="./images/portfolio/smarthome.png"
              className="w-100 gird_image"
            />
          </figure>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <ReadMoreBlock
            title="Smart Home App"
            description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet."
            subtitle="Mobile App"
          />
        </Col>
      </Row>
      <Row className="SelectedWork-category-section gx-5 gy-4 align-items-center removespacing">
        <Col lg={6} md={6} sm={12} xs={12}>
          <ReadMoreBlock
            title="Logo Animation"
            description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet."
            subtitle="Animation"
          />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <figure className="fig-img">
            <img
              src="./images/portfolio/Logo Animation.png"
              className="w-100 gird_image"
            />
          </figure>
        </Col>
      </Row>

    </Fragment>
  );
};
export default DevelopmentTabContent;
