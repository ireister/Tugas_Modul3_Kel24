import React, { Component } from "react";

const menu = [
    {
      nama: "Nasi goreng babi",
      harga: 1000,
    },
    {
      nama: "Temen babi",
      harga: 2000,
    },
    {
      nama: "Kuliah babi",
      harga: 5000,
    },
    {
        nama: "Kamu babi",
        harga: 500000,
      },
  ];
  
  export default class Menu extends Component {
    state = {
      cart: [],
    };
  
    componentDidMount() {
      alert(`Woe`);
    }
    componentDidUpdate(prevProps, state, snapshot) {
      alert(
        `Total : ${this.getTotal()}`
      );
    }


    add = (cok) => {
      this.setState((state) => ({
        cart: [...state.cart, cok],
      }));
    };
  
    remove = (cok) => {
      this.setState((state) => {
        const cart = [...state.cart];
        const cok1 = cart.findIndex((p) => p.nama === cok.nama);
        if (cok1 < 0) {
          return;
        }
        cart.splice(cok1, 1);
        return {
          cart,
        };
      });
    };
  
    getTotal = () => {
      const total = this.state.cart.reduce(
        (totalCost, item) => totalCost + item.harga,
        0
      );
      return total.toLocaleString(undefined);
    };
  
    render() {
      return (
        <div className="komponen">
          <h3>Total: {this.getTotal()}</h3>
          <div className="container">
            <div className="card">
              <div className="cok">
                {menu.map((cok) => (
                  <div key={cok.nama}>
                    <h4 className="nama">{cok.nama}</h4>
                    <button onClick={() => this.add(cok)}>+</button>{" "}
                    <button onClick={() => this.remove(cok)}>-</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
