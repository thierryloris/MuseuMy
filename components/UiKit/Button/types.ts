export interface ButtonProps {
    label: string;
    classNames?: string;
    color: "primary" | "secondary";
    align?: "mauto" | "m0";
    size?: "small" | "medium" | "large";
    link?: string;
    isTextOnLeft?: Boolean;
    onClick?: (payload: MouseEvent) => void;
}