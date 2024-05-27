import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const Navegacion = () => {

    return (
        <Navbar className="navbar">
            <Container className="d-flex flex-row">
                <Nav className="me-auto">
                    <Link
                        to="/"
                        className="text-white ms-3 text-decoration-none"
                    >
                    Home 🏠
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white ms-3 text-decoration-none"
                    >
                    Contacto 📒
                    </Link>
                </Nav>
                <Navbar.Brand className="text-white fw-bold">Happy Cake 🍰</Navbar.Brand>            
            </Container>
        </Navbar>
    )
}