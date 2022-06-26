import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    text-align: left;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 57.5rem;
      grid-template-areas: 'A B';
    }
  `}
`
export const Header = styled.header`
  ${() => css`
    margin-bottom: 3.2rem;
  `}
`
export const Content = styled.div`
  ${() => css`
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      margin-bottom: 3.2rem;

      li {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
    }
  `}
`
export const ColumnA = styled.div`
  ${() => css`
    @media (min-width: 1024px) {
      grid-area: A;
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
export const Icon = styled.img`
  ${() => css`
    width: 24px;
    height: 24px;
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
