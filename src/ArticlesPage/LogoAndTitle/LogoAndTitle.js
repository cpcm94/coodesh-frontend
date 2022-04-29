import React from 'react'
import { Logo } from './Logo/Logo'
import { LogoAndTitleWrapper, Title } from './LogoAndTitle.styles'

export const LogoAndTitle = () => {
  return (
    <LogoAndTitleWrapper>
      <Logo />
      <Title>Space Flight News</Title>
    </LogoAndTitleWrapper>
  )
}
