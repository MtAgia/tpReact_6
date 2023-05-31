import React from "react";
import { Form, Button } from "react-bootstrap";
import CardsColores from "./CardsColores";
import { useState, useEffect } from "react";
const FormularioPrincipal = () => {
    let getColor = JSON.parse(localStorage.getItem("listaColor")) || [];
    //con este controlo input
    const [color, setColor] = useState("");
    //con este controlo el array
    const [colores, setColores] = useState(getColor);
    const handleSubmit = (e) =>{
        e.preventDefault()
        setColores([...colores,color]);
        e.target.reset()
    }
    useEffect(()=>{
        localStorage.setItem("listaColor" , JSON.stringify(colores))
    },[colores]);
    const borrarColor = (colorIngresado) =>{
        let traerColor = colores.filter((iColor) => iColor !== colorIngresado)
        setColores(traerColor)
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
      <CardsColores colores={colores} borrarColor={borrarColor}></CardsColores>
    </>
  );
};

export default FormularioPrincipal;
