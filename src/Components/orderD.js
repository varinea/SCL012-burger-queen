import React,{Component} from 'react'
import Header from './header.js';
import {Button} from 'react-bootstrap';
import '../css/Menu.css';
import Clientfrom './Component/Client';



class Dinner extends Component {
    render() {
      return (
        <div className="Client">
        <Container>
        <title/>
        <Client/>
        </Container>
        </div>
      



        <div className='backgroundMenu'>
          <div >
            <Header titulo='Almuerzo / Cena' />
          </div>
          <div >
          <div >
            <Header titulo='Hamburguesas' />
          </div>
            <Button variant="warning" size="lg" block> Hamburguesa Simple $1000 </Button>
            </div> 
            <div >
             <Button variant="warning" size="lg" block>Hamburguesa Doble $1500</Button>
            </div>
            <div >
            <Header titulo='Acompañamientos' />
          </div>
            <div >
             <Button variant="warning" size="lg" block>Papas fritas $500</Button>
            </div>
            <div >
             <Button variant="warning" size="lg" block>Aros de cebolla $500</Button>
            </div>
            <div >
            <Header titulo='Para Tomar' />
          </div>
          <div >
             <Button variant="warning" size="lg" block>Agua 500ml $500</Button>
            </div>
            <div >
             <Button variant="warning" size="lg" block>Agua 750ml $700</Button>
            </div>
            <div >
             <Button variant="warning" size="lg" block>Agua 750ml $700</Button>
            </div>
            <div >
             <Button variant="warning" size="lg" block>Bebida/gaseosa 500ml $700</Button>
            </div>
            <div>
            <Button variant="warning" size="lg" block>Bebida/gaseosa 750ml $1000</Button>
            </div>

        </div>
      )
      
    }
}
export default Dinner;

