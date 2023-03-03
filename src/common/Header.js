import { Button, Col, Container, Row } from "react-bootstrap";
import LogoTrans from "./Header/LogoTrans";
import MainMenu from "./Header/MainMenu";

const Header = () => {
  return (
    <header className="desktop-header fixed-top">
      <Container fluid="sm">
        <Row className="d-flex align-items-baseline">
          <Col lg={2}>
            <LogoTrans />
          </Col>
          <Col>
            <MainMenu />
          </Col>
          <Col lg={2} className="text-right">
            <Button className="desktop-header__hop-on-call">Hop on Call</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
