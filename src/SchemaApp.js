import ReactJsonSchema from 'react-json-schema';

import ListWidget from './widgets/ListWidget';
import TextInput from './components/TextInput';
import Button from './components/Button'
import MQTTContainer from './containers/MQTTContainer';
import FormContainer from './containers/FormContainer';

import Divider from './components/Divider';

import Schema from './schema';

const view = new ReactJsonSchema();
view.setComponentMap({ListWidget, MQTTContainer, Button, TextInput, FormContainer, Divider});


const component = view.parseSchema(Schema);

export default function SchemaApp() {
    return component;
}
