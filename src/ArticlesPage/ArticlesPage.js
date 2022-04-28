import React, { useEffect, useState } from 'react'

const onLoadMore = (
  articleData,
  currentPage,
  setCurrentPage,
  setArticleData
) => {
  if (!currentPage.nextPageExists) return
  fetch(
    `https://coodesh-challenge-backend.herokuapp.com/articles?page=${
      currentPage + 1
    }`,
    { method: 'GET' }
  )
    .then((response) => response.json())
    .then((json) => {
      setArticleData([...articleData, ...json.data])
      setCurrentPage({
        pageNumber: json.current_page,
        nextPageExists: !!json.next_page_url,
      })
    })
}

export const ArticlesPage = () => {
  const [articleData, setArticleData] = useState([])
  const [currentPage, setCurrentPage] = useState({
    pageNumber: 0,
    nextPageExists: true,
  })
  const [latestArticleFirst, setLatestArticleFirst] = useState(true)
  useEffect(() => {
    fetch(
      `https://coodesh-challenge-backend.herokuapp.com/articles${
        !latestArticleFirst ? `?order=asc` : ''
      }`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setArticleData(json.data)
        setCurrentPage({
          pageNumber: json.current_page,
          nextPageExists: !!json.next_page_url,
        })
      })
  }, [latestArticleFirst])

  const onLoadByDate = () => {
    setLatestArticleFirst(!latestArticleFirst)
  }

  console.log('articleData', articleData)
  console.log('currentPage', currentPage)

  return (
    <>
      <button
        onClick={() =>
          onLoadMore(articleData, currentPage, setCurrentPage, setArticleData)
        }
      >
        more articles
      </button>
      <button onClick={() => onLoadByDate()}>date of articles</button>
      {/* <Header/>
        <Articles /> */}
    </>
  )
}
