import React from 'react';
import { Button,Checkbox,Radio,Divider,DatePicker, Space,Image,Avatar, List} from 'antd';

import './config.css';


//ming新增的部分，antd组件
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const onChangedate = (date, dateString) => {
  console.log(date, dateString);
};

const tableData = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
//


const createEditorConfig = () => {
  const componentList = []; // 自定义组件（物料）
  const componentMap = {}; // 组件和画布中元素的渲染映射

  return {
    componentList,
    componentMap,
    register: (component) => {
      componentList.push(component);
      componentMap[component.type] = component;
    }
  }
}

const registerConfig = createEditorConfig();


registerConfig.register({
  label: '文本',
  preview: () => '预览文本',
  render: () => '渲染文本',
  type: 'text'
});

registerConfig.register({
  label: '按钮',
  preview: () => <button>预览按钮</button>,
  render: () => <button style={{ display: 'block', width: '100%', height: '100%' }}>渲染按钮</button>,
  type: 'button'
});

registerConfig.register({
  label: '输入框',
  preview: () => <input placeholder="预览输入框" />,
  render: () => <input placeholder="渲染输入框" />,
  type: 'input'
});


//ming新增
registerConfig.register({
  label: '新按钮',
  preview: () => <Button type="dufault">Button</Button>,
  render: () => <Button type="primary">Button</Button>,
  type: 'button'
});

registerConfig.register({
  label: '多选框',
  preview: () => <Checkbox onChange={onChange}>Checkbox</Checkbox>,
  render: () => <Checkbox onChange={onChange}>Checkbox</Checkbox>,
  type: 'input'
});

registerConfig.register({
  label: '单选框',
  preview: () => <Radio>预览单选</Radio>,
  render: () => <Radio>渲染单选</Radio>,
  type: 'radio'
});

registerConfig.register({
  label: '分割线',
  preview: () => <Divider />,
  render: () => <Divider />,
  type: ''
});

registerConfig.register({
  label: '日期选择',
  preview: () => <Space direction="vertical"><DatePicker onChange={onChangedate} picker="year" /></Space>,
  render: () => <Space direction="vertical"><DatePicker onChange={onChangedate} picker="year" /></Space>,
  type: 'input'
});

registerConfig.register({
  label: '图片',
  preview: () =>   
  <Image
    width={50}
    src="../sourse/image.png"
  />,
  render: () =>   
  <Image
    width={50}
    src="../sourse/image.png"
  />,
  type: 'image'
});


// registerConfig.register({
//   label: '表格',
//   preview: () => 
//   <List
//   itemLayout="horizontal"
//   dataSource={tableData}
//   renderItem={(item) => (
//     <List.Item>
//       <List.Item.Meta
//         avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
//         title={<a href="https://ant.design">{item.title}</a>}
//         description="Ant Design, a design language for background applications, is refined by Ant UED Team"
//       />
//     </List.Item>
//   )}
//     />,
//   render: () => 
//   <List.Item>
//   <List.Item.Meta
//     avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
//     title={<a href="https://ant.design">{item.title}</a>}
//     description="Ant Design, a design language for background applications, is refined by Ant UED Team"
//   />
//   </List.Item>,
//   type: ''
// });

export default registerConfig;