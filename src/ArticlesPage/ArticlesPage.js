import React, { useEffect, useState } from 'react'
import { Container } from './Container'
import { Header } from './Header/Header'
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
  // const [inputText, setInputText] = useState('')

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
    console.log('searchString', searchString)
    setSearchString(searchString)
  }
  console.log('search', searchString)
  console.log('article', articleData)
  // const handleChange = (e) => {
  //   setInputText(e.target.value)
  // }

  return (
    <Container>
      <button
        onClick={() =>
          onLoadMore(
            articleData,
            currentPage,
            setCurrentPage,
            setArticleData,
            latestArticleFirst,
            searchString,
            articlesEndpointUrl
          )
        }
      >
        more articles
      </button>
      <Header
        onSearch={(text) => onSearch(text)}
        onOrderByChange={(showLatestFirst) =>
          onOrderByDateChange(showLatestFirst)
        }
        latestArticleFirst={latestArticleFirst}
      />
      {/* <button onClick={() => onOrderByDateChange()}>date of articles</button>
      <input type='text' value={inputText} onChange={handleChange} />
      <button onSearch={(text) => onSearch(text)}>Search</button> */}
      {/* <Header/>
        <Articles /> */}
    </Container>
  )
}
