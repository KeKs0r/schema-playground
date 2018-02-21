import React from 'react';
import TextField from 'material-ui/TextField';

export default function TextInput({name}) {
    return (
        <TextField type="text" name={name} />
    );
}
