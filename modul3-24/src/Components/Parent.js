import { Component } from "react"; import React from "react";
import SecondChild from "./SecondChild";
import FirstChild from "./FirstChild";
class Parent extends Component {
state = {
firstChild: false,
secondChild: false
}
ubahKomponenMuncul1 = () => {
this.setState(() => {
return {
firstChild: !this.state.firstChild
}
})
}
ubahKomponenMuncul2 = () => {
this.setState(() => {
return {
secondChild: !this.state.secondChild

}
})
}
render() {
return (
<>
<h1>Nasi Goreng Buabi</h1>
<div style={{ display: "flex" }}>
<div style={{ width: "50%" }}>
<button
onClick={this.ubahKomponenMuncul1}>{this.state.firstChild ? 'Tutup' :
'Buka'} Menu Makanan</button>
{this.state.firstChild && <FirstChild />}
</div>

<div style={{ width: "50%" }}>

<button
onClick={this.ubahKomponenMuncul2}>{this.state.secondChild ? 'Tutup' :
'Buka'} Menu Minuman</button>
{this.state.secondChild && <SecondChild />}
</div>
</div>
</>
);
}
}
export default Parent;