import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding-block: 0;
    padding-top: 1rem;

    ::before {
      content: '';
      width: 100%;
      height: calc(86% + ${theme.sizes.height});
      background-color: ${theme.colors.brandLight};
      display: block;

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      @media (min-width: 1024px) {
        height: calc(100% + ${theme.sizes.height});
      }
    }

    .button {
      margin-inline: auto;

      @media (min-width: 1024px) {
        margin: 0;
      }
    }

    @media (min-width: 1024px) {
      padding-top: ${theme.sizes.height};

      .wrapper {
        grid-template-columns: 60.5rem 1fr;
        grid-template-areas:
          'A B'
          'C C';
      }
    }
  `}
`
export const ColumnA = styled.div`
  ${() => css`
    @media (min-width: 1024px) {
      grid-area: A;
      text-align: left;
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
export const Header = styled.header`
  ${() => css``}
`
export const Content = styled.div`
  ${({ theme }) => css`
    > p {
      font-size: ${theme.fontSizes.large};
      line-height: ${theme.lineHeights.medium};
      font-weight: ${theme.fontWeights.normal};
      color: ${theme.colors.paragraph};

      margin-bottom: ${theme.sizes.medium};
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
export const WrapperButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.sizes.xxlarge};

    @media (min-width: 1024px) {
      align-items: flex-start;
    }
  `}
`
