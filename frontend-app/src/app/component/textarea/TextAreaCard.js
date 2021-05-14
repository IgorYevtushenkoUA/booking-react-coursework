import React from 'react';
import {Card, Form} from "react-bootstrap";

const TextAreaCard = (props) => {

    const styleForm = {
        marginTop: '20px',
    }

    const styleLabel = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const setTextArea = (value) => {
        debugger
        props.setTextArea(props.type, value);
    }

    return (
        <Card style={styleForm}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={styleLabel}>{props.type}</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setTextArea(e.target.value)}/>
            </Form.Group>
        </Card>
    );
};

export default TextAreaCard;