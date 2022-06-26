import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    text-align: center;
    background-color: ${theme.colors.brandBeige};

    @media (min-width: 1024px) {
      .wrapper {
        grid-template-columns: 48rem 1fr;
        grid-template-areas: 'B A';
        gap: 6.7rem;
      }
    }
  `}
`
export const Header = styled.header`
  ${() => css``}
`
export const ColumnA = styled.div`
  ${() => css`
    @media (min-width: 1024px) {
      grid-area: A;
      align-self: center;
    }
  `}
`
export const ColumnB = styled.div`
  ${() => css`
    @media (min-width: 1024px) {
      grid-area: B;
    }
  `}
`
export const Content = styled.div`
  ${() => css`
    text-align: left;
    p {
      margin-top: 2.4rem;
      margin-bottom: 6rem;
    }

    @media (min-width: 1024px) {
      p {
        margin-bottom: 0;
      }
    }
  `}
`
export const Image = styled.img`
  ${() => css`
    width: 26.4rem;
    display: block;
    margin-inline: auto;
    object-position: 0 2rem;

    @media (min-width: 1024px) {
      width: 42rem;
    }
  `}
`
