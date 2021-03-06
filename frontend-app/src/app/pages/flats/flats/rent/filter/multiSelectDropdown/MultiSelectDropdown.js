import React, {useState} from 'react';
import Select from 'react-select';
import {MultiSelect} from "@progress/kendo-react-dropdowns";
import {Container} from "react-bootstrap";

const MultiSelectDropdown = (props) => {

    let state = []

    console.log("props.data :" + props.type);
    console.log(props.data);

    const handleChange = (event) => {
        state = event.target.value
        props.setArray(state.map(item =>item.id), props.type);
    }

    return (
        <div>
            <MultiSelect
                data={props.data}
                onChange={handleChange}
                value={state.value}
                textField="name"
                dataItemKey="id"
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default MultiSelectDropdown;