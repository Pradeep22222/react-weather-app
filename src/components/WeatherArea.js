import React from 'react'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { ResultWeatherCard } from './ResultWeatherCard';
export const WeatherArea = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="weatherareabuttonsrow">
            <ButtonGroup aria-label="Basic example" className="mx-3">
              <Button variant="primary">All</Button>
              <Button variant="light">Cold</Button>
              <Button variant="danger">Hot</Button>
              <Button variant="dark">Rainy</Button>
              <Button variant="info">Clear</Button>
            </ButtonGroup>

            <ButtonGroup aria-label="Basic example" className="mx-3">
              <Button variant="success">Grid</Button>
              <Button variant="warning">List</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="displayareaweathercardrow">
          <Col md={4} sm={6}>
            <ResultWeatherCard></ResultWeatherCard>
          </Col>
          <Col md={4} sm={6}>
            <ResultWeatherCard></ResultWeatherCard>
          </Col>
          <Col md={4} sm={6}>
            <ResultWeatherCard></ResultWeatherCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
