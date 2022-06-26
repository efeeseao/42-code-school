export default {
  grid: {
    container: '100rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  colors: {
    primary: 'hsl(190, 100%, 26%)',
    headline: 'hsl(210, 11%, 15%)',
    paragraph: 'hsl(210, 9%, 31%)',
    background: 'hsl(180, 14%, 97%)',
    brandBeige: 'hsl(39, 100%, 97%)',
    brandDark: 'hsl(190, 100%, 14%)',
    brandLight: 'hsl(190, 23%, 89%)',
    black: '#000000',
    white: '#FFFFFF'
  },
  font: {
    family: {
      primary:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
      secondary: 'Rubik, sans-serif;'
    }
  },
  fontSizes: {
    xsmall: '1.2rem',
    small: '1.4rem',
    medium: '1.6rem',
    large: '1.8rem',
    xlarge: '2.0rem',
    xxlarge: '3.0rem',
    xxxlarge: '3.4rem'
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700
  },
  lineHeights: {
    small: '130%',
    medium: '150%',
    large: '160%'
  },
  sizes: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    height: '7.2rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
