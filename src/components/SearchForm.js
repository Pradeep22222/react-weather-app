import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const SearchForm = () => {
  return (
    <div>
      <h1 className="text-center mt-5">Weather App</h1>
      <Form>
              <Row>
                  <Col></Col>
          <Col>
            <Form.Control placeholder="Enter the city/country" />
          </Col>
          <Col>
            <Button type="submit" variant="success">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
