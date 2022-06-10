import React from "react"
import Appbar from "../components/Appbar"

export default {
    title: "Components/Appbar",
    component: Appbar,
};

const Template = (args) => <Appbar {...args} />

export const BasicAppbar = Template.bind({});
BasicAppbar.args = {
    titleString: '환경설정',
    bgColor: 'white'
}