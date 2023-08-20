import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { NumericFormat } from 'react-number-format';

class Alerta extends Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <Alert show={this.props.show} variant="success">
            <Alert.Heading>Item adicionado no carrinho</Alert.Heading>
            <p className="text-start">
              Produto: {this.props.produto.titulo}<br/>
              Valor: <NumericFormat value={this.props.produto.valor} displayType='text' decimalScale={2} prefix='R$' decimalSeparator=',' fixedDecimalScale />
            </p>
          </Alert>
        );
    }
}

export default Alerta;