import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaDownload, FaUpload } from "react-icons/fa";

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
          <Form.Group controlId="formGridBirth">
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
        <Col lg={6} md={10} xs={12}>
          <Form.Group controlId="formGridAttach">
            <Form.Label className="applyjobform__form__label">
              Attach your resume
            </Form.Label>
            <div>
              <Row
                style={{
                  background: "#F5F5F5",
                  border: "1.66667px dashed #C2C2C2",
                  borderRadius: "11.6667px",
                  padding: "10px",
                }}
              >
                <Col lg={3} md={2} xs={3} style={{
                      marginTop: "auto",
                      marginBottom: "auto"
                }}>
                <Form.Label for="inputfile">
                  <span
                    style={{
                      background: "#1AB700",
                      borderRadius: "11.6667px",
                      display: "inline-block",
                      height: "40px",
                      width: "40px",
                      textAlign: "center",
                      paddingTop: "5px",
                    }}
                  >
                    <FaUpload color="white" />
                  </span>
                  </Form.Label>
                </Col>
                <Col
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                 
                  <h4 className="applyjobform__form__label">Upload Files</h4>
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "11.6667px",
                      lineHeight: "14px",
                      color: "#A5A5A5",
                    }}
                  >
                    PDF, DOC, PPT, JPG, PNG
                  </p>                 
                </Col>
              </Row>
            </div>
            <Form.Control required type="file" hidden multiple id="inputfile"/>
          </Form.Group>
        </Col>

        <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
      </Row>

      <Button
        className="job-details_company_follow-btn onmobile applyjobform__form__btn"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}

export default ApplyJobForm;
