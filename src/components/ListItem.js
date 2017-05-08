import React from 'react';

export default function ListItem({text, ...props}) {
    return (
        <li {...props}> {text} </li>
    );
}
