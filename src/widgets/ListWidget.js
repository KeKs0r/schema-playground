import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ListItem from '../components/ListItem';


class ListWidget extends Component {
    static propTypes = {
        itemKey: PropTypes.string,
        itemProps: PropTypes.object,
        headline: PropTypes.string
    }
    render() {
        const { itemKey, itemProps } = this.props;
        const key = itemKey || 'data';
        const itemData = this.props[key] || [];
        const itemOut = itemData.map((d) => <ListItem {...itemProps} text={d.text} />)

        const headline = (this.props.headline) ? <Subheader>{this.props.headline}</Subheader> : null
        return (
            <List>
                {headline}
                {itemOut}
            </List>
        );
    }
}

export default ListWidget
