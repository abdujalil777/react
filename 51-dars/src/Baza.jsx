import React, { Component } from 'react';

class Baza extends Component {
    constructor(props){
        super(props)
        this.state = {
            birinchi:null,
            qiymat: '',
            ikkinchi:null,
            natija:0
        }
        this.box = this.box.bind(this) 
        }
        box(){
            this.setState({
                natija : (+(this.state.birinchi) + (this.state.qiymat) + (this.state.ikkinchi))
            })
            console.log(this.setState.natija);
        }

    render() {
        return (
            <div className='d-flex'>
                <input onChange={(val)=>{this.setState({ birinchi: val.target.value})}} className='form-control'  type="text" placeholder='son kiritn'/>
                <input onChange={(val)=>{this.setState({ qiymat: val.target.value})}}  type="text" placeholder='- + * / amalarni talang'/>
                <input onChange={(val)=>{this.setState({ ikkinchi: val.target.value})}} className='form-control' type="text" placeholder='son kiritn'/>
                <h3>{this.state.natija}</h3>
                <button onClick={this.box} className='form-control btn btn-success mx-5'>Natija</button>
            </div>
        );
    }
}

export default Baza;



