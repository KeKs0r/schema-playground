import React, { Component, PropTypes } from 'react';
import List from '../components/List';
import ListItem  from '../components/ListItem';


class ListWidget extends Component {
    static propTypes = {
        itemKey: PropTypes.string,
        itemProps: PropTypes.object,
        //itemComponent: PropTypes.element.isRequired
    }
  render() {
      const {itemKey, itemProps} = this.props;
      const key = itemKey || 'data';
      const itemData = this.props[key] || [];
      const itemOut = itemData.map((d) => <ListItem {...itemProps} text={d}/>)
    return (
        <ul>
            {itemOut}
        </ul>
    );
  }
}

export default ListWidget
