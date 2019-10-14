import React from 'react';
import {MultiSelect} from "primereact/multiselect";

export const FormMultiSelect = (props) => {
    const {field, label, options, events, placeholder, change, tooltip} = props;

    const handleChange = (e) => {
        props.change && change(e);
        events.handleChange(e);
    };

    return (
        <div>
            <label>{label}</label><br/>
            <MultiSelect
                name={field}
                placeholder={placeholder}
                options={options}
                tooltip={tooltip}
                onChange={handleChange}
                onBlur={events.handleBlur}
                value={events.values[field]}
            />
            <br/>
            <br/>
        </div>
    )
};