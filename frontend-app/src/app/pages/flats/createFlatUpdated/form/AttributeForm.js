import React from 'react';
import {Card, Col, Form} from "react-bootstrap";

const AttributeForm = (props) => {

    const setFormData = (text) => {
        props.setFormData(props.type, text);
    }

    return (
        <Card>
            <Col>
                {props.title}
            </Col>
            <Col>
                <Form.Control
                    placeholder={props.placeholder}
                    onChange={(e) => {
                        setFormData(e.target.value)
                    }}
                >
                </Form.Control>
            </Col>
        </Card>
    );
};

export default AttributeForm;