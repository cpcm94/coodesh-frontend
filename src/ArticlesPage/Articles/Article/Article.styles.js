import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: ${({ indexIsOdd }) => (!indexIsOdd ? 'row' : 'row-reverse')};
  max-height: 220px;
  margin: 6rem 0 0 0;
`

export const ArticleImage = styled.img`
  border-radius: 2px;
  width: 280px;
  height: 200px;
  object-fit: cover;
  margin: ${({ indexIsOdd }) => (!indexIsOdd ? '0 5rem 0 0' : '0 0 0 5rem')};
`
export const AriticleTitle = styled.div`
  text-align: start;
  font-weight: bold;
  font-size: 1.5rem;
`
export const ArticleDate = styled.div`
  align-self: center;
`
export const ArticleNewsSite = styled.div`
  border: 2px solid rgba(48, 46, 83, 0.5);
  background-color: rgba(48, 46, 83, 0.25);
  padding: 0 0.25rem;
`
export const ArticleDateAndSiteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ArticleSummary = styled.a`
  display: block;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
`
export const ArticleButton = styled.div`
  color: white;
  background-color: rgba(48, 46, 83, 0.5);
  width: 5rem;
  text-align: center;
  padding: 0.65rem 1.25rem;
  border-radius: 7px;
  cursor: pointer;
  margin: 0.75rem 0 0 0;
`
export const ArticleContent = styled.div`
  max-height: 220px;
  width: 100%;
`
