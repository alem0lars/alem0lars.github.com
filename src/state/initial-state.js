import { getDefaultTheme } from "../styles/themes";

export const initialState = {
  navigatorPosition: "is-aside",
  navigatorShape: "open",
  navigatorFilter: "",
  isWideScreen: false,
  scrollToTop: false,
  fontSizeIncrease: 1,
  categoryFilter: "all",
  themeName: getDefaultTheme().name
};
