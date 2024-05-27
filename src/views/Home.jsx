import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import torta from '../assets/torta.png'

const HomeView = () => {

    return(
        <Container className="text-center">
        <h1 className="pt-5">
          Bienvenido a <span className="fw-bold">Happy Cake</span> 
        </h1>
        <h6> El lugar de los pasteles felices</h6>
        <Row>
        <Col>
          <Image classname="img" src={torta}/>
        </Col>
      </Row>
      </Container>
    );
}

export default HomeView