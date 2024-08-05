import { fn } from '@storybook/test';
import { CreateCard, CardProps } from './Card';
import { Meta } from '@storybook/html'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Cards',
  tags: ['autodocs'],
  render: ({ width, ...args }) => {
    const Card = CreateCard({ width, ...args}).outerHTML
    // You can either use a function to create DOM elements or use a plain html string!
    return `<div style="display:flex; justify-content: center; height: 100vh; align-items: center">${Card}</div>`;
    return Card;
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    title: { control: 'text' },
    content: { control: 'text' },
    mode: { 
        control: { type: 'select' },
        options: ['light', 'dark']
    },
    height: { control: 'text' },
    img: { control: 'file' },
    width: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn(), onMouseEnter: fn() },
} as Meta<CardProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SimpleCard = {
  args:{
    title:"Who we are",
    content:"We are a small group of passionate techies, credit geeks, designers, marketers, risk and compliance experts, and a friendly customer support team with a shared vision to make a difference to the consumer credit market.",
    backgroundColor:"#682424",
    width:"400px",
    height:"355px",
    mode:"light",
    img:["blob:http://localhost:6006/6ef84cb1-8362-43c7-9252-064d1945ff6d"],
    titleStyle:'',
    contentStyle:'',
    imgWidth:200,
    imgHeight:150,
    imgTop:50
  },
};

// export const Secondary = {
//   args: {
//     label: 'Secondry Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
