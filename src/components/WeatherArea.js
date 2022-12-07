import React from 'react'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ResultWeatherCard } from './ResultWeatherCard';
export const WeatherArea = () => {
  return (
    <div>
      <Row>
        <Col className="weatherareabuttonsrow">
          <ButtonGroup aria-label="Basic example" className="mx-3">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example" className="mx-3">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="displayareaweathercardrow">
        <ResultWeatherCard></ResultWeatherCard>
        <ResultWeatherCard></ResultWeatherCard>
        <ResultWeatherCard></ResultWeatherCard>
        <ResultWeatherCard></ResultWeatherCard>
        <ResultWeatherCard></ResultWeatherCard>
        <ResultWeatherCard></ResultWeatherCard>
      </Row>
    </div>
  );
}
