import styled from 'styled-components'
import { colors } from '../colors'

export const Title = styled.div`
  font-size: 1.5rem;
  color: ${colors.purple};
`
export const LogoAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 0;
  position: relative;

  &:before {
    border-bottom: 2px solid rgba(48, 46, 83, 0.5);
    content: '';
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: -1%;
    right: 0%;
    bottom: 0;
    width: 102%;
  }
`
