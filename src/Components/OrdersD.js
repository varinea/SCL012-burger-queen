import React, { Component} from 'react';
import Header from './header.js'
import { Button, Container,Row,Col } from 'react-bootstrap'
import '../css/Menu.css';

class Dinner extends Component {
  render() {
    return (
      <div className='backgroundMenu'>
<<<<<<< HEAD:src/Components/orderD.js
        <Container>
          <Row>
            <div className="tittleOrder" >
              <Header titulo='Almuerzo / Cena' />
            </div>
            <Col className="TittleHam">
            <Header titulo='Hamburguesas' />
            <Button variant="warning" size="lg" block> Hamburguesa Simple $1000 </Button>
            <Button variant="warning" size="lg" block>Hamburguesa Doble $1500</Button>
            </Col>
          </Row>
          <Row>
            <Col>
            <Header titulo='Acompañamientos' />
            <Button variant="warning" size="lg" block>Papas fritas $500</Button>
          <Button variant="warning" size="lg" block>Aros de cebolla $500</Button>
            </Col>
            <Col>
            <Header titulo='Para Tomar' />
          <Button variant="warning" size="lg" block>Agua 500ml $500</Button>
          <Button variant="warning" size="lg" block>Agua 750ml $700</Button>
          <Button variant="warning" size="lg" block>Agua 750ml $700</Button>
            </Col>
            <Col>
=======
        <div>
          <Header titulo='Almuerzo / Cena' />
        </div>
        <div>
          <div>
            <Header titulo='Hamburguesas' />
          </div>
          <Button variant="warning" size="lg" block> Hamburguesa Simple $1000 </Button>
        </div>
        <div>
          <Button variant="warning" size="lg" block>Hamburguesa Doble $1500</Button>
        </div>
        <div>
          <Header titulo='Acompañamientos' />
        </div>
        <div>
          <Button variant="warning" size="lg" block>Papas fritas $500</Button>
        </div>
        <div>
          <Button variant="warning" size="lg" block>Aros de cebolla $500</Button>
        </div>
        <div>
          <Header titulo='Para Tomar' />
        </div>
        <div>
          <Button variant="warning" size="lg" block>Agua 500ml $500</Button>
        </div>
        <div>
          <Button variant="warning" size="lg" block>Agua 750ml $700</Button>
        </div>
        <div>
          <Button variant="warning" size="lg" block>Agua 750ml $700</Button>
        </div>
        <div>
>>>>>>> 9059d44bbaafa61df53cd20a1281c61addd9e4ad:src/Components/OrdersD.js
          <Button variant="warning" size="lg" block>Bebida/gaseosa 500ml $700</Button>
          <Button variant="warning" size="lg" block>Bebida/gaseosa 750ml $1000</Button></Col>
          </Row>
        </Container>
        
  </div>
    )

  }
}
export default Dinner;

