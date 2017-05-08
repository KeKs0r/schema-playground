const schema = {
    component: "List",
    headline: "List Headline, whoop whoop",
    children: [
        {
            component: "TextWidget",
            text: "I am a sexy nugget Widget",
        },
        {
            component: "TextWidget",
            text: "Another Widget"
        }
    ]
}

const completeSchema = {
    component: "div",
    children: [
        {
            component: "MQTTContainer",
            topic: "@demo/messages",
            children: [
                {
                    component: "List",
                    itemKey: "data",
                    itemProps: {
                        style: 'color:#440000'
                    },
                    //itemComponent: "ListItem"
                }
            ]
        },
        {
            component: "FormContainer",
            name: "messages",
            submitTopic: "@demo/messages",
            children: [
                {
                    component: "TextInput",
                    name: "text"
                },
                {
                    component: "Button",
                    type: "submit"
                }
            ]
        }
    ]
}

export default schema;