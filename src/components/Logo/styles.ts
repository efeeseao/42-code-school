import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: css`
    height: 2.3rem;
    width: 4rem;
  `,
  large: css`
    height: 5.9rem;
    width: 5rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ color, size, theme }) => css`
    ${!!size && wrapperModifiers[size]}
    color: ${theme.colors[color!]};

    img {
      height: 2rem;
    }
  `}
`
