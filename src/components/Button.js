import React from 'react';

export default function Button({type, label}) {
    return (
        <button type={type}> {label} </button>
    );
}
