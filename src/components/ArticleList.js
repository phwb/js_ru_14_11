import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

const ArticleList = props => {
  const { articles, openArticle, openArticleId } = props

  const articleItems = articles.map(article => (
    <li key = {article.id}>
      <Article
        article = {article}
        isOpen = {article.id === openArticleId}
        toggleOpen = {openArticle(article.id)}
      />
    </li>
  ))

  return (
    <ul>
      {articleItems}
    </ul>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  openArticle: PropTypes.func.isRequired,
  openArticleId: PropTypes.string
}

export default accordion(ArticleList)