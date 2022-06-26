import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type ButtonStyledProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.fontSizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.fontSizes.small}
    padding: ${theme.sizes.xxsmall} ${theme.sizes.medium};
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.white}

    &:hover {
      color: ${theme.colors.primary};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.fontSizes.medium};
    padding: ${theme.sizes.xxsmall} ${theme.sizes.large};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.sizes.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<ButtonStyledProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    background-color: ${theme.colors.primary};

    border: none;
    border-radius: 4rem;

    margin-bottom: 3rem;

    padding: 1.6rem 3.2rem;
    width: fit-content;

    color: white;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    text-decoration: none;

    transition: background 200ms;

    cursor: pointer;

    :hover {
      background-color: ${theme.colors.brandDark};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
