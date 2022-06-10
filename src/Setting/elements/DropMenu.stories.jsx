import React from "react"
import DropMenu from "../components/DropMenu"

export default {
    title: "Components/DropMenu",
    component: DropMenu,
}

const Template = (args) => <DropMenu {...args} />

export const BasicDropMenu = Template.bind({});
BasicDropMenu.args = {
    activeBorderColor: '#3563DE',
    keyValueArray: [['a', '쉬움'], ['b', '보통'], ['c', '어려움'], ['d', '제일 어려움']]
}
