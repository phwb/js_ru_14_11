import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, SUBMIT_FORM } from '../constants'
import { Map } from 'immutable'

/** @const {Map} initialState */
const initialState = normalizedArticles.reduce((acc, item) => acc.set(item.id, item), new Map())

export default (articlesState = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.articleId)
        case SUBMIT_FORM:
            return articlesState.map(article => {
                if (article.id === payload.articleId) {
                    article.comments.push(payload.id)
                }

                return article
            })
    }

    return articlesState
}
