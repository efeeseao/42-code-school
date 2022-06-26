import styled, { css, DefaultTheme } from 'styled-components'

import { HeadingProps } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.bold};

    line-height: ${theme.lineHeights.medium};
    letter-spacing: 0.08rem;

    text-transform: uppercase;

    margin-bottom: ${theme.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.xxlarge};
    line-height: 3.9rem;
    margin-bottom: 6rem;

    @media (min-with: 1024px) {
      font-size: 4rem;
      line-height: 5.3rem;
      width: 47rem;
      margin-inline: auto;
    }
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSizes.xxxlarge};
    line-height: ${theme.lineHeights.small};

    margin-bottom: ${theme.sizes.small};

    @media (min-width: 1024px) {
      font-size: 5.2rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    margin-bottom: 0.8rem;

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
