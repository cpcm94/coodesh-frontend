import React from 'react'
import { TopHeader } from './Header.styles'
import { OrderByDateSelector } from './OrderByDateSelector/OrderByDateSelector'
import { SearchBar } from './SearchBar/SearchBar'

export const Header = ({ onSearch, onOrderByChange, latestArticleFirst }) => {
  return (
    <>
      <TopHeader>
        <SearchBar onSearch={onSearch} />
        <OrderByDateSelector
          onOrderByChange={onOrderByChange}
          latestArticleFirst={latestArticleFirst}
        />
      </TopHeader>
      {/* <CenterPieceLogo/> */}
    </>
  )
}
