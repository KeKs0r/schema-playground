import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormContainer extends Component {
    static propTypes = {
        submitTopic: PropTypes.string.isRequired
    }
    static contextTypes = {
        mqtt: PropTypes.object
    };
    constructor(props){
        super(props);
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    change(e, stuff, moreStuff) {
        const field = e.target.name;
        const value = e.target.value;
        const newState = {};
        newState[field]  = value;
        this.setState(newState);
    }
    submit(e) {
        e.preventDefault();
        const topic = this.props.submitTopic;
        const message = JSON.stringify(this.state);
        this.context.mqtt.publish(topic, message);
        this.setState({});
    }
    render() {
        return (
            <form onChange={this.change} onSubmit={this.submit}>
                {this.props.children}
            </form>
        )
    }
}