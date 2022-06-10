import React from 'react';
import NameChange from './NameChange';
import ModeChange from './ModeChange';
import TextChange from './TextChange';

export default {
    title: '환경설정',
};

const NameChangeTemplate = (args) => <NameChange {...args} />;
const ModeChangeTemplate = (args) => <ModeChange {...args} />;
const TextChangeTemplate = (args) => <TextChange {...args} />;

export const NameChangePage = NameChangeTemplate.bind({});
export const ModeChangePage = ModeChangeTemplate.bind({});
export const TextChangePage = TextChangeTemplate.bind({});

NameChangePage.args = {
    MenuTitleString: '사용자 이름 변경',
    TextInputPlaceholder: '이름 입력...',
    TextInputActiveBorderColor: '#3563DE',
    ButtonString: '입력',
    ButtonStringColor: 'white',
    ButtonColor: '#3563DE'
}
ModeChangePage.args = {
    MenuTitleString: '난이도 변경',
    DropMenuArray: [['a', '쉬움'], ['b', '보통'], ['c', '어려움'], ['d', '제일 어려움']],
    DropMenuActiveBorderColor: '#3563DE'
}
TextChangePage.args = {
    MenuTitleString: '테마 변경',
    DropMenuArray: [['a', '폰트1'], ['b', '폰트2'], ['c', '폰트3']],
    DropMenuActiveBorderColor: '#3563DE'
}