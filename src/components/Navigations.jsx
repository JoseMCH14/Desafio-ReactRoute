import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navegacion = () => {

    return (
        <Navbar className='navbar'>
            <Container className="d-flex flex-row">
                <Nav className="me-auto vinculos">
                    <Nav.Link href="#home">Home 🏠</Nav.Link>
                    <Nav.Link href="#link">Contacto 📒</Nav.Link>
                </Nav>
                <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>            
            </Container>
        </Navbar>
    );
}