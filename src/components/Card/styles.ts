import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 2.4rem;
    text-align: left;

    background: ${theme.colors.white};

    border: 1px solid ${theme.colors.brandLight};
    border-radius: 0.6rem;

    @media (min-width: 1024px) {
      width: 30%;
      flex-grow: 1;
    }
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    margin-block: ${theme.fontSizes.medium};
  `}
`
export const Text = styled.p`
  ${() => css``}
`
export const Icon = styled.img`
  ${() => css`
    width: 24px;
    height: 24px;
  `}
`
