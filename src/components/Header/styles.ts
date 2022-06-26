import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
    width: 100%;
    background: ${theme.colors.primary};
    position: static;
    line-height: 2rem;

    > a {
      cursor: pointer;
      text-decoration: none;
    }
  `}
`
export const Menu = styled.ul`
  ${() => css`
    display: flex;
    align-items: center;
    flex-direction: row;
  `}
`
export const MenuOption = styled.li`
  ${({ theme }) => css`
    padding: 0.5rem 0;
    list-style: none;
    .active {
      background: ${theme.colors.background};
    }

    &:last-of-type {
      margin-right: -0.6rem;
      @media (min-width: 66.667em) {
        margin-right: 0;
      }
    }

    a {
      background: transparent;
      text-decoration: none;
      border-radius: 0.3rem;
      padding: 0.6rem;
      margin: 0 0.25rem;
      color: rgba(0, 0, 0, 0.7);
      border-bottom: none;
      font-weight: ${theme.fontWeights.normal};
      font-size: ${theme.fontSizes.xsmall};
      color: ${theme.colors.white};

      &:hover {
        text-decoration: underline;
      }

      @media (min-width: 66.667em) {
        padding: 1rem 1.5rem;
        font-size: ${theme.fontSizes.small};
      }
    }
  `}
`
