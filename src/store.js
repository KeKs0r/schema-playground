import { createStore } from 'redux';


const initialState = {
    topics: {}
};

function messageReducer(state = initialState, action) {
    if(action.type === 'MQTT') {
        const {topic, message, packet} = action;
        const newState = Object.assign({}, state);
        newState.topics[topic] = (newState.topics[topic]) ? newState.topics[topic] : [];
        newState.topics[topic].push(message);
        return newState;
    }

    return state;
}

const store = createStore(
    messageReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store;