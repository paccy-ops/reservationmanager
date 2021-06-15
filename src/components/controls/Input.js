import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name,rows, label, value,error=null, onChange, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            rows={rows}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
