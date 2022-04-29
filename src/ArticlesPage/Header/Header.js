import React from 'react'
import { HeaderWrapper } from './Header.styles'
import { OrderByDateSelector } from './OrderByDateSelector/OrderByDateSelector'
import { SearchBar } from './SearchBar/SearchBar'

export const Header = ({ onSearch, onOrderByChange, latestArticleFirst }) => {
  return (
    <HeaderWrapper>
      <OrderByDateSelector
        onOrderByChange={onOrderByChange}
        latestArticleFirst={latestArticleFirst}
      />
      <SearchBar onSearch={onSearch} />
    </HeaderWrapper>
  )
}
