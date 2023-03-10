import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ApplyJobForm() {
  const applyJobFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={applyJobFormHandler} className="applyjobform__form">
      <Row className="mb-4 gy-3">
        <Col lg={4} md={6} xs={12}>
          <Form.Group controlId="formGridFirst">
            <Form.Label className="applyjobform__form__label">
              First Name
            </Form.Label>
            <Form.Control
              className="applyjobform__form__input"
              type="text"
              required
              placeholder="First Name"
            />
          </Form.Group>
        </Col>
        <Col lg={4} md={6} xs={12}>
          <Form.Group controlId="formGridMiddle">
            <Form.Label className="applyjobform__form__label">
              Middle Name
            </Form.Label>
            <Form.Control
              type="text"
              className="applyjobform__form__input"
              required
              placeholder="Middle Name"
            />
          </Form.Group>
        </Col>
        <Col lg={4} md={12} xs={12}>
          <Form.Group controlId="formGridLast">
            <Form.Label className="applyjobform__form__label">
              Last Name
            </Form.Label>
            <Form.Control
              type="text"
              className="applyjobform__form__input"
              required
              placeholder="Last Name"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4 gy-3">
      <Col lg={4} md={6} xs={12}>
        <Form.Group  controlId="formGridBirth">
          <Form.Label className="applyjobform__form__label">
            Birth Date
          </Form.Label>
          <Form.Control
            type="date"
            className="applyjobform__form__input"
            required
          />
        </Form.Group>
       </Col> 
       <Col lg={4} md={6} xs={12}>
        <Form.Group controlId="formGridEmail">
          <Form.Label className="applyjobform__form__label">
            Email Address
          </Form.Label>
          <Form.Control
            type="email"
            className="applyjobform__form__input"
            required
            placeholder="Email Address"
          />
        </Form.Group>
        </Col>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label className="applyjobform__form__label">
            Phone Number
          </Form.Label>
          <Form.Control
            type="tel"
            className="applyjobform__form__input"
            required
            placeholder="Phone Number"
          />
        </Form.Group>
      </Row>

      <Row className="mb-4 gy-3">
        <Form.Group as={Col} controlId="formGridAbout">
          <Form.Label className="applyjobform__form__label">
            About You
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder=""
            style={{ height: "100px" }}
            required
            className="applyjobform__form__input"
          />
        </Form.Group>
      </Row>
      <Row className="mb-4">
      <Col lg={6} md={12} xs={12}>
      <Form.Group controlId="formGridAttach">
          <Form.Label className="applyjobform__form__label">
            Attach your resume
          </Form.Label>
          <Form.Control required type="file" multiple />
        </Form.Group>
       </Col>
      
        <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
      </Row>

      <Button
        variant="primary"
        className="job-details_company_follow-btn onmobile"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}

export default ApplyJobForm;
