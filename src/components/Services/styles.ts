import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css``}
`
export const Header = styled.header`
  ${() => css``}
`
export const Content = styled.div`
  ${() => css``}
`
export const Cards = styled.article`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media (min-width: 1024px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4rem;
    }
  `}
`
