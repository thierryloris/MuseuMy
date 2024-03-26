import { cva } from "class-variance-authority";

export const ButtonStyles = cva([""], {
  variants: {
    color: {
      primary: "bg-green text-white",
      secondary: "bg-black text-white",
    },
    align: {
      mauto: "m-auto",
      m0: "m-0",
    },
  },
});
