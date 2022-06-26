import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    width: min(50rem, 100%);
    margin-inline: auto;
    padding-inline: ${theme.sizes.small};

    @media (min-width: 1024px) {
      width: min(112rem, 100%);
      display: grid;
    }
  `}
`

export default Container
