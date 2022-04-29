import React, { useEffect, useState } from 'react'
import { Articles } from './Articles/Articles'
import { Container } from './Container'
import { Header } from './Header/Header'
import { LogoAndTitle } from './LogoAndTitle/LogoAndTitle'
import { onLoadMore } from './onLoadMore'

const articlesEndpointUrl =
  'https://coodesh-challenge-backend.herokuapp.com/articles'

export const ArticlesPage = () => {
  const [articleData, setArticleData] = useState([])
  const [currentPage, setCurrentPage] = useState({
    pageNumber: 0,
    nextPageExists: true,
  })
  const [latestArticleFirst, setLatestArticleFirst] = useState(true)
  const [searchString, setSearchString] = useState('')
  const [isLoading, setLoading] = useState(false)

  const orderUrlQuery = !latestArticleFirst ? `?order=asc` : ''
  const searchUrlQuery =
    searchString !== '' && !latestArticleFirst
      ? `&search=${searchString}`
      : searchString !== '' && latestArticleFirst
      ? `?search=${searchString}`
      : ''

  useEffect(() => {
    fetch(`${articlesEndpointUrl}${orderUrlQuery}${searchUrlQuery}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        setArticleData(json.data)
        setCurrentPage({
          pageNumber: json.current_page,
          nextPageExists: !!json.next_page_url,
        })
      })
  }, [orderUrlQuery, searchUrlQuery])

  const onOrderByDateChange = (showLatestFirst) => {
    setLatestArticleFirst(showLatestFirst)
  }

  const onSearch = (searchString) => {
    setSearchString(searchString)
  }

  return (
    <Container>
      <Header
        onSearch={(text) => onSearch(text)}
        onOrderByChange={(showLatestFirst) =>
          onOrderByDateChange(showLatestFirst)
        }
        latestArticleFirst={latestArticleFirst}
      />
      <LogoAndTitle />
      <Articles
        onLoadMore={() =>
          onLoadMore(
            articleData,
            currentPage,
            setCurrentPage,
            setArticleData,
            latestArticleFirst,
            searchString,
            articlesEndpointUrl,
            setLoading
          )
        }
        articles={articleData}
        isLoading={isLoading}
      />
    </Container>
  )
}
