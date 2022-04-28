import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import { colors } from '../../colors'
import { OutlinedInput, InputLabel } from '@mui/material'

export const StyledLabel = styled(InputLabel)`
  display: flex;
  align-content: center;
`

export const StyledInput = styled(OutlinedInput)`
  height: 2.75rem;
`

export const StyledIcon = styled(SearchIcon)`
  background-color: ${colors.purple};
  padding: 0.35rem 0.2rem;
  margin-right: -7px;
  color: white;
`
