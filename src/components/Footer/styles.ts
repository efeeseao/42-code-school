import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding-block: 6rem;

    text-align: left;

    color: white;

    @media (min-width: 1024px) {
      padding-block: 8rem;

      .wrapper {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'A B';
      }
    }
  `}
`
export const ColumnA = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.brandBeige};
      line-height: 2;

      margin-bottom: 3.2rem;

      @media (min-width: 1024px) {
        margin-bottom: 0;
        margin-top: 3.2rem;
      }
    }

    a {
      cursor: pointer;
      text-decoration: none;
    }

    @media (min-width: 1024px) {
      grid-area: A;
      align-self: center;
    }
  `}
`
export const ColumnB = styled.div`
  ${() => css`
    .social-links {
      justify-content: flex-start;
    }

    @media (min-width: 1024px) {
      grid-area: B;
      align-self: center;
      justify-self: flex-end;
    }
  `}
`
export const Icon = styled.img`
  ${() => css`
    width: 24px;
    height: 24px;
  `}
`
