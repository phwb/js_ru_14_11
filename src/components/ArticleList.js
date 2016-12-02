import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { articles, isOpen, toggleOpenItem } = this.props

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {isOpen(article.id)}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => {
    const { articles, filters } = state
    const selected = filters.selected
    const { from, to } = filters.dateRange

    // TODO как то научиться работать с объектом, а не преобразовывать его в массив
    const filteredArticles = articles.toArray().filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
    return {
        articles: filteredArticles
    }
})(accordion(ArticleList))
