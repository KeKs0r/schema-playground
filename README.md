App Logic is generated from a JSON schema: 
```
{
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
```