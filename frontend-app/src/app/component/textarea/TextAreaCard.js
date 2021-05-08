import React from 'react';
import {Card, Form} from "react-bootstrap";

const TextAreaCard = () => {

    const styleForm = {
        marginTop: '20px',
    }

    const styleLabel = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Card style={styleForm}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={styleLabel}>Введіть опис квартири</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
        </Card>
    );
};

export default TextAreaCard;