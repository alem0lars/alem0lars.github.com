import lightTheme from "./light-theme";
import darkTheme from "./dark-theme";

export const themes = [
  { name: "dark", data: darkTheme },
  { name: "light", data: lightTheme }
];

export const getDefaultTheme = () => themes[0];

export function getTheme(name) {
  let foundTheme = findThemeByName(name);
  if (!foundTheme) {
    foundTheme = getDefaultTheme();
  }
  return foundTheme.data;
}

export function getNextThemeName(currentThemeName) {
  // Find current theme index.
  let currentThemeIndex = themes.indexOf(findThemeByName(currentThemeName));
  if (currentThemeIndex < 0) {
    currentThemeIndex = 0;
  }

  const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
  const nextThemeName = themes[nextThemeIndex].name;

  return nextThemeName;
}

export function findThemeByName(themeName) {
  return themes.filter(theme => theme.name === themeName)[0];
}
