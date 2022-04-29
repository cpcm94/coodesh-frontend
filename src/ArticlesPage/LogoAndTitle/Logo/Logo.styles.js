import styled from 'styled-components'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { colors } from '../../colors'

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.75rem;
`
export const StyledLaunchIcon = styled(RocketLaunchIcon)`
  padding: 2.75rem;
  height: 55px !important;
  width: 55px !important;
  color: ${colors.purple};
`
export const InnerWrapper = styled.div`
  border: solid rgba(48, 46, 83, 0.5) 2px;
  height: 145px;
  width: 145px;
  border-radius: 50%;
`
