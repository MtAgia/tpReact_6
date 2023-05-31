import React from "react";
import { Form, Button } from "react-bootstrap";
import CardsColores from "./CardsColores";
import { useState } from "react";
const FormularioPrincipal = () => {
    //con este controlo input
    const [color, setColor] = useState("");
    //con este controlo el array
    const [colores, setColores] = useState([]);
    const handleSubmit = (e) =>{
        e.preventDefault()
        setColores([...colores,color]);
        e.target.reset()
    }
  return (
    <>
      <Form onSubmit={handleSubmit} className="py-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Eliga su color!</Form.Label>
          <Form.Control
            onChange={(e) => setColor(e.target.value)}
            type="text"
            value={color}
            placeholder="Ingrese un color Ej: Blue"
            style={{ width: "250px" }}
          />
          <Form.Text className="text-muted">En Ingles Porfavor!</Form.Text>
        </Form.Group>
        <Button onC variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      <CardsColores colores={colores}></CardsColores>
    </>
  );
};

export default FormularioPrincipal;
