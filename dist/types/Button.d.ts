export type ButtonProps = {
    size?: 'medium' | 'large';
    backgroundColor?: string;
    label: string;
    onClick: () => void;
    onMouseEnter?: () => void;
    width?: string;
    height?: string;
    fontSize?: string;
    fontWeight?: string;
};
export declare function Button({ size, backgroundColor, label, onClick, onMouseEnter, width, height, fontSize, fontWeight }: ButtonProps): HTMLDivElement;
