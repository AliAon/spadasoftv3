import { Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { hostname } from "../../config";
const CardFive = (props) => {
  const { title, excerpt, category, author, featured_image } = props;
  const categorylist = category?.map((el) => {
    return (
      <li>
        <button>{el}</button>
      </li>
    );
  });
  console.log(categorylist);

  return (
    <div className="cardFive position-relative">
      <figure className="fig-img">
        <img src={featured_image} className="w-100" />
      </figure>
      <p className="cardFive__date">08.08.2021</p>
      <Fade direction="up" duration={1000} triggerOnce={true}>
       <Link to={`${hostname}/blog/1`}> <h4 className="cardFive__title">{title}</h4></Link>
      </Fade>
      <Fade direction="up" duration={1000} delay={300} triggerOnce={true}>
        <p className="cardFive__description">{excerpt}</p>
      </Fade>

      <ul className="cardFive__category position-absolute">{categorylist}</ul>
      <div>
      <Fade direction="up" duration={1000} delay={500} triggerOnce={true}>
        <Row>
          <Col lg={3} xs={3}>
            <img src={author?.picture} />
          </Col>
          <Col lg={9} xs={9}>
            <h6 className="cardFive__name">{author?.name}</h6>
            <p className="cardFive__designation">{author?.position}</p>
          </Col>
        </Row>
        </Fade>
      </div>
    </div>
  );
};
export default CardFive;
