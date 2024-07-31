export type ButtonProps = {
  size?: 'medium' | 'large', 
  backgroundColor?: string,
  label: string,
  onClick: () => void
  onMouseEnter?: () => void
  width?: string
  height?: string
  fontSize?: string
  fontWeight?: string
}


export const Button = ({
  size = 'large',
  backgroundColor = "#01AD09",
  label,
  onClick,
  onMouseEnter,
  width,
  height,
  fontSize,
  fontWeight
}: ButtonProps) => {
  const container = document.createElement('div');
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  onMouseEnter && btn.addEventListener('mouseenter', onMouseEnter);

  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#149213"
  })

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = backgroundColor
  })

  btn.className = size === 'large'? 
    [
      "text-white py-[12px] px-[24px] rounded-lg h-[60px]",
      "text-[20px] font-bold text-white",
      `bg-[${backgroundColor}]`
    ].join(" "):
    [
      "text-white py-[12px] px-[16px] rounded-lg h-[36px]",
      "text-[14px] font-semibold leading-3",
      `bg-[${backgroundColor}]`,
    ].join(" ");

  // btn.style.width = width + "px"

  // btn.style.fontSize = fontSize ?? "20px";
  // btn.style.fontWeight= fontWeight ?? "700";


  console.log(btn.className)

  btn.style.backgroundColor = backgroundColor ?? '';

  container.append(btn)
  return container;
};
