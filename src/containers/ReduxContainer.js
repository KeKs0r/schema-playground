import React, {Component, PropTypes} from 'react';
//import { subscribe } from 'mqtt-react';
import {connect} from 'react-redux';
import _ from 'lodash';


const defaultMergeProps = function(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default class ReduxContainer extends Component{
    static propTypes = {
        statePath: PropTypes.string.isRequired
    }
    constructor(props){
        super(props);
        const { statePath } = props;
        const mapStateToProps = (state) => {
            return {
                data: _.get(state, statePath)
            }
        }
        const connected = connect(mapStateToProps,{},defaultMergeProps, {pure: false});
        const singleChild = React.Children.only(props.children);
        const newType = connected(singleChild.type);
        const element = React.createElement(newType, singleChild.props)
        this.element = element;
    }
    render (){
        return this.element;
    }
}