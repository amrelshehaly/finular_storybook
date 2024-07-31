import { fn } from '@storybook/test';
import { Button, ButtonProps } from './Button';
import { Meta } from '@storybook/html'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({ label, width, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return Button({ label, width, ...args});
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    width: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['medium', 'large'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), onMouseEnter: fn() },
} as Meta<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args:{
    size:"large",
    label:"Apply Now",
    backgroundColor:'#01AD09',
    width:"156",
    height:"60"
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
