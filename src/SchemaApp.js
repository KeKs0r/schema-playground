import ReactJsonSchema from 'react-json-schema';

import TextWidget from './components/TextWidget';
import List from './components/List';

import Schema from './schema';

const view = new ReactJsonSchema();
view.setComponentMap({TextWidget, List});


const component = view.parseSchema(Schema);

export default function SchemaApp() {
    return component;
}
