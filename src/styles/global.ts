import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyle: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins Light'), local('Inter-SemiBold'),
        url('/fonts/inter-v8-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins Regular'), local('Inter-Regular'),
        url('/fonts/inter-v8-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Inter-Bold'),
        url('/fonts/inter-v8-latin-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins Light'), local('Rubik-SemiBold'),
        url('/fonts/rubik-v19-latin-600.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins Regular'), local('Rubik-Regular'),
        url('/fonts/rubik-v19-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Rubik-Bold'),
        url('/fonts/rubik-v19-latin-700.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.background};

      font-family: ${theme.font.family.primary};
      font-size: ${theme.fontSizes.medium};

      text-align: center;

      overflow: overlay;

      @media (min-width: 1024px) {
        overflow: auto;
      }
    `}
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  section {
    padding-block: 10rem;

    @media (min-width: 1024px) {
      padding-block: 16rem;
    }
  }

  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
  }

  a {
    text-decoration: none;
  }
`
export default GlobalStyle
