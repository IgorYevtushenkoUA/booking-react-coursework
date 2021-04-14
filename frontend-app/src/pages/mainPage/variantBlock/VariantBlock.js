import React from 'react';
import {Button, Card, Container, Image, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const VariantBlock = (props) => {
    return (
        <Card className="p-4 mt-3">
            <h2>{props.title}</h2>
            <Link to={props.link}>
                <Button
                    variant={"outline-warning"}>
                    Перейти
                </Button>
            </Link>
        </Card>
    );
};

export default VariantBlock;