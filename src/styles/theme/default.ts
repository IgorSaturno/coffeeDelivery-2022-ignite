export const defaultTheme = {
    colors: {
      "base-white": "#FFFFFF",
      "base-background": "#FAFAFA",
      "base-card": "#F3F2F2",
      "base-input": "#EDEDED",
      "base-button": "#E6E5E5",
      "base-hover": "#D7D5D5",
      "base-label": "#8D8686",
      "base-text": "#574F4D",
      "base-subtitle": "#403937",
      "base-title": "#272221",
      "base-error": "#f84747",
      "brand-purple-dark": "#4B2995",
      "brand-purple": "#8047F8",
      "brand-purple-light": "#EBE5F9",
      "brand-yellow-dark": "#C47F17",
      "brand-yellow": "#DBAC2C",
      "brand-yellow-light": "#F1E9C9",
    },
    textSizes: {
      "title-title-xl": "3rem",
      "title-title-l": "2rem",
      "title-title-m": "1.5rem",
      "title-title-s": "1.2rem",
      "title-title-xs": "1.125rem",
      "text-regular-l": "1.25rem",
      "text-bold-l": "1.25rem",
      "text-regular-m": "1rem",
      "text-bold-m": "1rem",
      "text-regular-s": "0.875rem",
      "text-bold-s": "0.75rem",
      "components-tag": "0.625rem",
      "components-button-g": "0.875rem",
      "components-button-s": "0.75rem",
    },
    fonts: {
      regular: "'Roboto'",
      title: "'Baloo 2'",
    },
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

type ThemeType = typeof defaultTheme


declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}