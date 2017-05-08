import React, { Component} from 'react';
import PropTypes from 'prop-types';
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
      const itemOut = itemData.map((d) => <ListItem {...itemProps} text={d.text}/>)
    return (
        <ul>
            {itemOut}
        </ul>
    );
  }
}

export default ListWidget
