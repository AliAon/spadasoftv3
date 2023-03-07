import { Fragment } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
const JobSearch = (props) => {
  const searchformhandler=(e)=>{
    e.preventDefault()
  }
  return (
    <Row className="removespacing jobsearch_section  align-items-center">
      <Col lg={6} md={7}>
        <h3 className="cardEight__title">
          Find Your Dream Jobs Through{" "}
          <span
            style={{
              color: "#1AB700",
            }}
          >
            Spadasoft
          </span>{" "}
          Easily
        </h3>
        <Form className="jobsearch_section__form" onSubmit={searchformhandler}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search here..."
              aria-label="Search here..."
              aria-describedby="basic-addon2"
              required
              className=" jobsearch_section__form__input__field_search"
            />
            <Button
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
              className="btn-default-circled"
            >
              Search Job
            </Button>
          </InputGroup>
        </Form>
        <div>
          <ul className="jobsearch_section_professions">
            <li>
              <span>Web Dev</span>
            </li>
            <li>
              <span>Mobile Dev</span>
            </li>
            <li>
              <span>Design</span>
            </li>
            <li>
              <span>Writing</span>
            </li>
            <li>
              <span>Admin Support</span>
            </li>
            <li>
              <span>Customer Service</span>
            </li>
            <li>
              <span>Marketing</span>
            </li>
            <li>
              <span>Writing</span>
            </li>
            <li>
              <span>Accounting</span>
            </li>
            <li >
              <span className="jobsearch_section_professions_active">View all categories</span>
            </li>
            <li className="clear-fix"></li>
          </ul>
        </div>
      </Col>
      <Col lg={6} md={5}>
        <img
          src="http://localhost:3000/images/career/Group 1529.png"
          className="w-100"
        />
      </Col>
    </Row>
  );
};
export default JobSearch;
