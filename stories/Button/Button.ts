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


export function CreateButton ({
  size = 'large',
  backgroundColor,
  label,
  onClick,
  onMouseEnter,
  width,
  height,
  fontSize,
  fontWeight
}: ButtonProps) {
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
    btn.style.backgroundColor = "#01AD09"
  })

  btn.className = size === 'large'? 
    [
      "flex items-center justify-center py-[12px] px-[24px] rounded-lg h-[60px]",
      "text-[20px] font-bold text-white",
      `bg-[#01AD09]`
    ].join(" "):
    [
      "flex items-center justify-center py-[12px] px-[16px] rounded-lg h-[36px]",
      "text-[14px] font-semibold text-white",
      `bg-[#01AD09]`,
    ].join(" ");

  btn.style.backgroundColor = backgroundColor ?? '';

  container.append(btn)
  return container;
};
