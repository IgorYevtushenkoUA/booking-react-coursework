import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const VariantBlock = (props) => {
    return (
        <div className={`p-4 mt-3 ${props.block}`}>
            <h2 style={{fontSize: "3em", fontFamily: "Century Gothic", color: "black"}}>{props.title}</h2>
            <Link to={props.link}>
                <Button className={`${props.border}`}>
                    Перейти
                </Button>
            </Link>
        </div>
    );
};

export default VariantBlock;