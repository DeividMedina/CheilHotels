import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logo from './img/Cheil.png'
import Registro from './Components/RegisterHotel'
import {hotelesCheil} from './Data/DatosHoteles.json'

class App extends Component {

  constructor(){
    super();
    this.state={
      hotelesCheil
    };
    this.handleAddHotel = this.handleAddHotel.bind(this);
  }

  handleAddHotel(hotel){
    this.setState({
      hotelesCheil:[...this.state.hotelesCheil, hotel]
    })
  }

  removeHotel(id) {
    this.setState({
      hotelesCheil: this.state.hotelesCheil.filter((e, i) => {
        return i !== id
      })
    });
  }
  editHotel(id){
    const edit = this.state.hotelesCheil.filter((e, i) => {
      return(
        i === id
      )
    });
    
    console.log(edit);
  }

  render(){
    const hotelesCheil = this.state.hotelesCheil.map((hotel, i)=>{
    return(
      <div className="table" id="mytable" key={i}>
          <div className="card mt-4">
            <div className="card-header">{hotel.nombre}
            <span className="badge badge-pill badge-success m-4">Calificación: {hotel.calificacion}</span>
            
            </div>
            <div className="card-text"><strong>Pais: </strong> {hotel.pais}</div>
            <div className="card-text"><strong>Ciudad: </strong>{hotel.ciudad}</div>
            <div className="card-footer">
              <div className="btn-group mr-2">
                <button
                  className="btn btn-danger p-2"
                  onClick={this.removeHotel.bind(this , i)}>
                  Eliminar
                </button>
                <button
                  className="btn btn-info"
                  onClick={this.editHotel.bind(this , i)}>
                  Editar
                </button>
              </div>
            </div>  
          </div>
        </div>

    )
    }) 
  return (
    <div className="App">
      <nav className="navbar navbar-fixed-top bg-light">
          <li className="nav-item">
            <img src={Logo} alt="Logo Cheil" width="40%" height="auto"/>
          </li>
      </nav>  
      <div className="container">
        <div className="form-group">
        <input type="text" className="form-control pull-right mt-4"
        id="search" placeholder="Buscar Hotel"/>
         {hotelesCheil}
        </div>
        <span className="badge badge-light -4">
          Hoteles disponibles: {hotelesCheil.length}
        </span>
        <div className="col mt-3 p-4">
        <Registro onAddHotel={this.handleAddHotel}/>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
