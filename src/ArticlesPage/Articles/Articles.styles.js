import styled from 'styled-components'
import { colors } from '../colors'

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15%;
`

export const LoadMoreButton = styled.div`
  cursor: ${({ loading }) => (loading ? 'default' : 'pointer')};
  color: ${colors.purple};
  border: 2px solid rgba(48, 46, 83, 0.5);
  border-radius: 5px;
  width: 10rem;
  padding: 0.5rem 0;
  align-self: center;
  margin: 3rem;
`
