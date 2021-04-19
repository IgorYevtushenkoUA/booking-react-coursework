import React from 'react';
import {Button, Card, Container, Image, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import "./VariantBlock.css"

const VariantBlock = (props) => {

    console.log(props.border)

    return (
        <div className={`p-4 mt-3 ${props.block}`}>
            <h2 style={{fontSize: "3em", fontFamily: "Century Gothic", color: "white"}}>{props.title}</h2>
            <Link to={props.link}>
                <Button className={`${props.border}`}>
                    Перейти
                </Button>
            </Link>
        </div>
    );
};

export default VariantBlock;