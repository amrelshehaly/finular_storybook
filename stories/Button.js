// import './button.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  onMouseEnter,
  width,
  fontSize,
  fontWight
}) => {
  const container = document.createElement('div');
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  btn.addEventListener('mouseenter', onMouseEnter);


  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  // btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');
  btn.className = ["bg-blue-500 text-white p-2 rounded",`w-[${width}px]`].join(" ");

  btn.style.width = width + "px"

  btn.style.fontSize = "20px";
  btn.style.fontWeight= 700;


  console.log(btn.className)

  btn.style.backgroundColor = backgroundColor;
  // btn.style.width = width+ 'px'

  container.append(btn)
  return container;
};
