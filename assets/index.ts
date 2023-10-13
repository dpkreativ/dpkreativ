import localFont from "@next/font/local";
import logo from "@/assets/images/Logo-01.svg";

const fonts = localFont({
  src: [
    {
      path: "./fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export { logo, fonts };
