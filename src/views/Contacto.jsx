import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Contacto = () => {

    return (
        <Container className='d-flex flex-column justify-content-center mt-5 text-center'>
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <Form className='mt-3'>
            <Form.Group className="mb-3">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className='mt-3' variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
      </Container>
    );
}

export default Contacto;