import React from "react"
import MenuTitle from "../components/MenuTitle"

export default {
    title: "Components/MenuTitle",
    component: MenuTitle,
}

const Template = (args) => <MenuTitle {...args} />

export const BasicMenuTitle = Template.bind({});
BasicMenuTitle.args = {
    titleString: '사용자 설정 레이블'
}
