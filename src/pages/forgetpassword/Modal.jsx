import React from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import '../../assets/styles/base.scss'
import Countdown from "react-countdown";

function MyModal(props) {

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      props.setModalShow(false)
      return null;

    } else {
      // Render a countdown
      return <span>{minutes}:{seconds}</span>;
    }
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Doğrulama Kodu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Form>
          <Row>
            <Col className="col-lg-9 col-md-8">

            </Col>
          </Row>


          <Row>
            <Col className="col-lg-12 col-md-12 mt-3">
              <Form.Group>
                <Form.Control
                  id="email"
                  type="text"
                  label="Email"
                  className="pl-text-box"
                  placeholder="Doğrulama kodunu giriniz"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Row className="resend-code">
          <Col className="col-lg-9 col-md-9 mt-3" >
            Doğrulama kodu gelmedi mi? <a href="#"> Tekrar gönder</a>
          </Col>
          <Col className="col-lg-3 col-md-3 mt-3" style={{ textAlign: "right" }}>
            <Countdown date={Date.now() + 300000} renderer={renderer} />

          </Col>
        </Row>


      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="pl-button pl-secondary-button" onClick={props.onHide}> Vazgeç</Button>
        <Button className="pl-button pl-primary-button">Gönder</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;