import React from 'react';
import { Card, Button } from "react-bootstrap";
const ItemColor = (props) => {
    return (
      <>
        <Card className="col-12 col-lg-3 col-sm-3 ms-3" style={{ width: "18rem" }}>
          <Card.Header className="text-center">
            {props.color.toString().toUpperCase()}
          </Card.Header>
          <Button style={{width : "80px"}} className='my-4' variant="danger">Borrar</Button>
          <Card.Body
            style={{ backgroundColor: props.color, width: "80px", height: "80px" }}
          >
          </Card.Body>
        </Card>
      </>
    );
};

export default ItemColor;