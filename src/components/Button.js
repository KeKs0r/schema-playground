import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

/*
 type: 'submit'
 label
*/
export default function Button({...props}) {
    return (
        <RaisedButton {...props} />
    );
}
