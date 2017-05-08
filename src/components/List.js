import React from 'react';

export default function List({children, headline}) {
    return (
        <div>
            {headline}
            <ul>
                {children}
            </ul>
        </div>
    );
}
