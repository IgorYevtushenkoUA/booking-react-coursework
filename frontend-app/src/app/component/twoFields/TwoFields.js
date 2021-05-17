import React from 'react';
import {FormControl} from "react-bootstrap";

const TwoFields = (props) => {
    return (
        <div>
            <FormControl placeholder={props.placeholder1}></FormControl>
            <FormControl placeholder={props.placeholder2}></FormControl>
        </div>
    );
};

export default TwoFields;