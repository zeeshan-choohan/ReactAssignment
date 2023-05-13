import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contents</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Offcanvas.Title>
            AirLine
         </Offcanvas.Title>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;