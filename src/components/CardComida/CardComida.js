import React, { Component, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NumericFormat } from 'react-number-format';
import './CardComida.css';

export class CardComida extends Component {
    render() {
        const link = 'http://site.rango/link-' + this.props.produto.id;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.produto.foto} width={this.props.largura} height={this.props.altura} />
                <Card.Body>
                    <Card.Title>{this.props.produto.titulo}</Card.Title>
                    <Card.Text>
                        <div class="d-flex flex-row mb-2">
                            <div class="p-2 flex-fill text-start valor"><NumericFormat value={this.props.produto.valor} displayType='text' decimalScale={2} prefix='R$' decimalSeparator=',' fixedDecimalScale /></div>
                            <div class="p-2 flex-fill text-end"><Button variant="primary"><i class="fa-regular fa-plus"></i></Button></div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
export default CardComida;
