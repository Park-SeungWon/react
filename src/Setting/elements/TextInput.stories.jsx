import React from "react"
import TextInput from "../components/TextInput"

export default {
    title: "Components/Input",
    component: TextInput,
}

const Template = (args) => <TextInput {...args} />

export const BasicTextInput = Template.bind({});
BasicTextInput.args = {
    placeholder: 'placeholder',
    activeBorderColor: '#3563DE'
}
