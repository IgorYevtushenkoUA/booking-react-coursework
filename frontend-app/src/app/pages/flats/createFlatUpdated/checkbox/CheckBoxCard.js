import React, {useState} from 'react';
import {Card, Form} from "react-bootstrap";

const CheckBoxCard = (props) => {
    const styleCard = {
        display: 'grid',
        gridTemplateColumns: '3fr 3fr 3fr'
    }

    const styleTitle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const changeData = (id) => {
        props.changeData(id, props.type);
    }

    const elem = props.elem;

    return (
        <Card style={{marginTop:'20px'}}>
            <div style={styleTitle}>
                {props.title}
            </div>
            <div style={styleCard}>
                {elem.map(item => (
                    <Form.Check
                        key={item.id}
                        label={item.name}
                        onChange={() => changeData(item.id)}
                    />
                ))}
            </div>
        </Card>
    );
};

export default CheckBoxCard;