import React from "react"
import Button, { ButtonProps } from "../components/Button"

export default {
    title: "Components/Button",
    component: Button,
}

const Template = (args) => <Button {...args} />

export const BasicButton = Template.bind({});
BasicButton.args = {
    text: '글자',
    bgColor: '#3563DE',
    fontColor: 'white',
}
