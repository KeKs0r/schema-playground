import React from 'react';
import {ListItem} from 'material-ui/List';

export default function MyListItem({text, ...props}) {
    return (
        <ListItem {...props} primaryText={text} />
    );
}
