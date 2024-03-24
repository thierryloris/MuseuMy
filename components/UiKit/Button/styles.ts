import { cva } from "class-variance-authority";

export const ButtonStyles = cva([""], {
  variants: {
    color: {
      primary: "bg-green-900 text-white",
      secondary: "bg-orange-950 text-white",
    },
    align: {
      mauto: "m-auto",
      m0: "m-0",
    },
    size: {
      small: "text-md",
      medium: "text-paragraph",
      large: "text-lg",
    },
  },
});
