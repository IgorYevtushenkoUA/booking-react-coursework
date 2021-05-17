import React, {useState} from 'react';
import {Card, Container, Form} from "react-bootstrap";

const CheckBoxCard = (props) => {
    const styleCard = {
        display: 'grid',
        gridTemplateColumns: '3fr 3fr 3fr',
        marginLeft: '25px',
        paddingBottom: '20px'
    }

    const styleTitle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '25px',
        paddingTop: '20px',
        paddingBottom: '20px'
    }

    const changeData = (id) => {
        props.changeData(id, props.type);
    }

    const elem = props.elem;

    return (
        <div>
            <Card style={{marginTop: '20px'}}>
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
        </div>
    );
};

export default CheckBoxCard;