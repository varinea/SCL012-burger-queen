import React,{Component } from 'react';
import Header from '../Components/header.js'
import {Button} from 'react-bootstrap'
import '../css/Menu.css';
import db from '../Config';
import Client from '../Components'

state = {
  items:[]  //se rellenara con las respuestas que se tengand de componentDiMount
}

componentDidMount(){
  db.collection('Client').get().then((snapShots) => {
    this.setStates({
      items:snapShots.docs.map(doc => {
        console.log(doc.data());
      })
    })
  })
}


class Dinner extends Component {
    render() {
      return (
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

