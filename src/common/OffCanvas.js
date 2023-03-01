import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "./Header/Logo";
import MobileMainMenu from "./Header/MobileMainMenu";
import SocialLinks from "./Header/TopBarElements/SocialLinks";
function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="btn-togle">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Logo/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 className="primary-nav-link-mobile__title">Menu</h4>
          <MobileMainMenu />
          <center>
            <button className="desktop-header__hop-on-call">Hold On Call</button>
          </center>
          <Row className="justify-content-center mt--40">
            <Col xs={7}>
              <SocialLinks color="#6A4F34" />
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
