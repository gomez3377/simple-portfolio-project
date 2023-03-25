import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    nearBlack: "#151515",
    green: "#4EE1A0",
    darkGray: "#242424",
    lighGray: "D9D9D9",
  },
};
export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
