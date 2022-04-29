import React from 'react'
import {
  AriticleTitle,
  ArticleButton,
  ArticleContent,
  ArticleDate,
  ArticleDateAndSiteWrapper,
  ArticleImage,
  ArticleNewsSite,
  ArticleSummary,
  ArticleWrapper,
} from './Article.styles'

export const Article = ({ article, index }) => {
  const indexIsOdd = index % 2
  const getArticleDate = (article) => {
    const YearMonthDay = article.publishedAt.substr(0, 10)
    const Date = YearMonthDay.split('-').reverse()
    return `${Date[0]}/${Date[1]}/${Date[2]}`
  }
  const navigateToArticle = () => (window.location.href = `${article.url}`)
  return (
    <ArticleWrapper indexIsOdd={indexIsOdd}>
      <ArticleImage
        src={article.imageUrl}
        indexIsOdd={indexIsOdd}
        alt='Imagem do artigo'
      />
      <ArticleContent>
        <AriticleTitle>{article.title}</AriticleTitle>
        <ArticleDateAndSiteWrapper>
          <ArticleDate>{getArticleDate(article)}</ArticleDate>
          <ArticleNewsSite>{article.newsSite}</ArticleNewsSite>
        </ArticleDateAndSiteWrapper>
        <ArticleSummary>{article.summary}</ArticleSummary>
        <ArticleButton onClick={navigateToArticle}>Ver Mais</ArticleButton>
      </ArticleContent>
    </ArticleWrapper>
  )
}
