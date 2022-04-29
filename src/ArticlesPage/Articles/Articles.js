import React from 'react'
import { Article } from './Article/Article'
import { ArticlesWrapper, LoadMoreButton } from './Articles.styles'

export const Articles = ({ onLoadMore, articles, isLoading }) => {
  return (
    <ArticlesWrapper>
      {articles.map((article, index) => {
        return <Article article={article} key={article.id} index={index} />
      })}
      <LoadMoreButton onClick={onLoadMore} isLoading={isLoading}>
        {isLoading ? 'Loading...' : 'Carregar mais'}
      </LoadMoreButton>
    </ArticlesWrapper>
  )
}
