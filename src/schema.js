const completeSchema = {
    component: "div",
    children: [
        {
            component: "MQTTContainer",
            topic: "@demo/messages",
            children: {
                    component: "ListWidget",
                    itemKey: "data",
                    itemProps: {
                        style: {
                            backgroundColor: '#0000FF'
                        }
                    }
                }
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
                     label: "Send",
                    type: "submit"
                }
            ]
        }
    ]
}



export default completeSchema;