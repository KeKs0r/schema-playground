import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { subscribe } from 'mqtt-react';
import subscribe from '../temp_subscribe.js';

export default class MQTTContainer extends Component{
    static propTypes = {
        topic: PropTypes.string.isRequired
    }
    constructor(props){
        super(props);
        const { topic } = this.props;
        const subscription = subscribe({topic});
        const singleChild = React.Children.only(props.children);
        const newType = subscription(singleChild.type);
        const element = React.createElement(newType, singleChild.props)
        this.element = element;
    }
    //@TODO update rendering if something down the tree changes
    render (){
        return this.element;
    }
}