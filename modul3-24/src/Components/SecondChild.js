import React, { Component } from "react";
class Minuman extends Component {
    state = {
        isi: 0
    }
    componentDidMount(){
        alert('Minumannya cuma es teh, ingin pesan berapa')
    }
    tambah = () => {
        this.setState((state) => { return { isi: state.isi + 1 } })
    }
    kurang = () => {
        this.setState((state) => { return { isi: state.isi - 1 } })
    }
    componentWillUnmount(){
        alert('Mantab')
    }
    render() {
        return (
            <div class="minuman-wrapper">
                <h3>Minumanannya gratis pesen 100 juga gapeduli</h3>
                <h4> Total : 0 </h4>
                <h4>Jumlah es teh : {this.state.isi}</h4>
                
                <button class="button" onClick={this.tambah}>+</button>
                <button class="button" onClick={this.kurang}>-</button>
                <br/>
                <p>{this.state.isi}</p>
            </div>
        );
    }
}
export default Minuman;