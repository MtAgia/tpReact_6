import React from 'react';
//import { Card, Button } from 'react-bootstrap';
import {Row,Container} from 'react-bootstrap';
import ItemColor from './ItemColor';
const CardsColores = (props) => {
    return (
      <>
        <Container>
          <Row>
            {props.colores.map((color, i) => (
              <ItemColor key={i} color={color}></ItemColor>
            ))}
          </Row>
        </Container>
      </>
    );
};

export default CardsColores;