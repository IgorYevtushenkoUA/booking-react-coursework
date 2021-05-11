import React from 'react';
import {Card, Col, Form, Row} from "react-bootstrap";

const AttributeForm = (props) => {

    const setFormData = (text) => {
        props.setFormData(props.type, text);
    }

    return (
        <Card>
            <Row style={{display:'flex', textAlign:'center'}}>
                <Col md={4}>
                    {props.title}
                </Col>
                <Col md={8}>
                    <Form.Control
                        placeholder={props.placeholder}
                        onChange={(e) => {
                            setFormData(e.target.value)
                        }}>
                    </Form.Control>
                </Col>
            </Row>
        </Card>
    );
};

export default AttributeForm;