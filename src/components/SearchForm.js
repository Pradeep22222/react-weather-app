import React, { useState } from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const SearchForm = ({onCitySubmit}) => {
  const [city, setCity] = useState("");
  const onCityTyped = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setCity(value);
  }
  console.log(city);
  return (
    <div>
      <h1 className="text-center mt-5">Weather App</h1>
      <Form onSubmit={(e) => { e.preventDefault();  onCitySubmit(city);}}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Enter the city/country"
              onChange={onCityTyped}
            />
          </Col>
          <Col>
            <Button type="submit" variant="success">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
