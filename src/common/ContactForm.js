import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb--30"  controlId="formBasicName">
        <Form.Control type="text" style={{
              paddingTop: "1rem",
              paddingBottom: "1rem"
        }} size="md"  placeholder="Your Name" required />
      </Form.Group>
      <Form.Group className="mb--30" controlId="formBasicEmail">
        <Form.Control style={{
              paddingTop: "1rem",
              paddingBottom: "1rem"
        }} type="email" size="md"  placeholder="Your Email" required />
      </Form.Group>
      <Form.Group className="mb--30"  controlId="formBasicComment" >
        <Form.Control
          as="textarea" 
          size="md" 
          placeholder="Your Message"
          required
          style={{ height: '150px' }}
        />
      </Form.Group>
      <Button className="btn-default" type="submit">
        SEND MESSAGE
      </Button>
    </Form>
  );
}

export default ContactForm;
