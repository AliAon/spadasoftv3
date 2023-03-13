import { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CardFive from "../../common/cards/CardFive";
import { BlogsData } from "../../data/Blogs";
const AllBlogsGridTabContent = (props) => {
  const bloglist = BlogsData.map((el) => {
    return (
      <Col lg={4} md={6}>
        <CardFive
          title={el.title}
          excerpt={el.excerpt}
          category={el.category}
          author={el.author}
          featured_image={el.featured_image}
        />
      </Col>
    );
  });

  return (
    <Fragment>
      <Row className="gy-4 gx-4 pt--20">
        {bloglist}
      
      </Row>
    </Fragment>
  );
};
export default AllBlogsGridTabContent;
