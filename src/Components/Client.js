import {Component} from 'react'
import db from '../Config';
import '../css/Menu.css';

export default class Client extends Component {

  state = {
    ClientName:[]
  }

  componentDidMount(){
    db.collection('Client').get().then((snapShots) => {
      this.setStates({
        ClientName:snapShots.docs.map(doc => {
          return {id:doc.id, data:doc.data()}
        })
      })
    }),error => {
      console.log(error);
    }
  }
}

render(){ 
  return(
    <div className="Client">
        <Container>
        <title/>
        <Client/>
        </Container>
        </div>
    )
}


 
