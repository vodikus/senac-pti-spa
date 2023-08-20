import React, { useState } from 'react';
import './App.css';
import CardComida from './components/CardComida/CardComida';
import Alerta from './components/Alerta/Alerta';

const dados = [
  { foto: 'images/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg', titulo: 'Hamburgão Loko', valor: 77.65, id: 'burger-1' },
  { foto: 'images/eaters-collective-pLKgCsBOiw4-unsplash.jpg', titulo: 'Hamburgão Pirado', valor: 76.75, id: 'burger-2' },
  { foto: 'images/michele-blackwell-rAyCBQTH7ws-unsplash.jpg', titulo: 'Miojão Nervoso', valor: 99.9, id: 'miojo-1' },
  { foto: 'images/macarrao-instantaneo-miojo-0522-1400x800.jpg', titulo: 'Miojão Brabo', valor: 95.9, id: 'miojo-2' },
  { foto: 'images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg', titulo: 'Saladinha Ninja', valor: 150, id: 'salada-1' }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.exibirAlerta.bind(this);
    this.adicionarCarrinho.bind(this);
    this.state = {
      alerta: false,
      produto: { titulo: '' }
    };
  }
  exibirAlerta = (visivel) => {
    this.setState({ alerta: visivel });
  };
  adicionarCarrinho = ({ item }) => {
    console.log("Produto: " + item.titulo);
    this.setState({ produto: item });
    this.exibirAlerta(true);
    setTimeout(() => {
      this.exibirAlerta(false);
    }, 3000);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SENAC PTI SPA - Delivery de Comidas Rango Bom</h1>
        </header>
        <div className="position-fixed alerta end-0">
          <Alerta show={this.state.alerta} produto={this.state.produto} />
        </div>
        <section className="App-pratos">
          <div className="container text-center">
            <div className="row">
              {dados.map((obj, index) =>
                <div className="col pt-3" key={index}>
                  <CardComida key={index} produto={obj} largura={300} altura={300} callback={this.adicionarCarrinho} />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default App;



