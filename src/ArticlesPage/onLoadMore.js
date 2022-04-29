export const onLoadMore = (
  articleData,
  currentPage,
  setCurrentPage,
  setArticleData,
  latestArticleFirst,
  searchString,
  articlesEndpointUrl,
  setLoading
) => {
  if (!currentPage.nextPageExists) return

  setLoading(true)

  fetch(
    `${articlesEndpointUrl}?page=${currentPage.pageNumber + 1}${
      !latestArticleFirst ? `&order=asc` : ''
    }${searchString !== '' ? `&search=${searchString}` : ''}`,
    { method: 'GET' }
  )
    .then((response) => response.json())
    .then((json) => {
      setArticleData([...articleData, ...json.data])
      setCurrentPage({
        pageNumber: json.current_page,
        nextPageExists: !!json.next_page_url,
      })
      setLoading(false)
    })
}
