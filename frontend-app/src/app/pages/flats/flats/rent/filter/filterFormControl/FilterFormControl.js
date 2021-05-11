import React from 'react';
import {Container, FormControl, FormLabel} from "react-bootstrap";

const FilterFormControl = (props) => {

    const changeInput = (type, value) => {
        props.changeInput(type, value);
    }

    return (
        <div className={"filter_form_control mt-2"} >

            <FormLabel>
                {props.label}
            </FormLabel>

            <FormControl
                placeholder={props.placeholderFrom}
                onChange={
                    (e) => {
                        changeInput(props.typeFrom, e.target.value)
                    }}
            />
            <FormControl
                placeholder={props.placeholderTo}
                onChange={
                    (e) => {
                        changeInput(props.typeTo, e.target.value)
                    }}
            />
        </div>
    );
};

export default FilterFormControl;