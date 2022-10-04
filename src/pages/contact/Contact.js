import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contact(){
    return(
        <>
          <Form>
          <h2>¡Trabajemos juntos!</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Escriibe tu nombre</Form.Label>
        <Form.Control type="email" placeholder="Ej: pepito perez" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Escribe un mensaje</Form.Label>
        <Form.Control type="password" placeholder="Quiero contactárte..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>  
            
        </>

    );
}
export default Contact;