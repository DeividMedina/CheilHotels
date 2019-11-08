import React, {Component} from "react"

class RegisterHotel extends Component{
    constructor(){
        super();
        this.state={
          id:'',
          nombre:'',
          pais:'',
          ciudad:'',
          calificacion:''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleInput(e){
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddHotel(this.state);
        this.setState({
            id:'',
            nombre:'',
            pais:'',
            ciudad:'',
            calificacion:''
        });
    }


    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <strong>Crear Nuevo Hotel</strong>
                </div>
                <form onSubmit={this.handleSubmit} className="card-body">
                    
                    <div className="form-group">
                        <input
                        name="id"
                        type="text"
                        className="form-control"
                        placeholder="Identificador"
                        value={this.state.id}
                        onChange={this.handleInput}
                        required/>
                    </div>
                    
                    <div className="form-group">
                        <input
                        name="nombre"
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        value={this.state.nombre}
                        onChange={this.handleInput}
                        required/>
                    </div>
                    
                    <div className="form-group">
                        <input
                        name="ciudad"
                        type="text"
                        className="form-control"
                        placeholder="Ciudad"
                        value={this.state.ciudad}
                        onChange={this.handleInput}
                        required/>
                    </div>
                    
                    <div className="form-group">
                        <input
                        name="pais"
                        type="text"
                        className="form-control"
                        placeholder="Pais"
                        value={this.state.pais}
                        onChange={this.handleInput}
                        required/>
                    </div>
                    
                    <div className="form-group">
                        <input
                        name="calificacion"
                        min="0" max="10"
                        type="number"
                        className="form-control"
                        placeholder="Calificacion"
                        value={this.state.title}
                        onChange={this.handleInput}
                        required/>
                    </div>
                    
                    <div className="form-group">
                        <button 
                        type="submit"
                        className="btn btn-light mb-2"
                        >Registrar
                        </button>
                    </div>
                
                </form>
            </div>
        )
    }
}
export default RegisterHotel;