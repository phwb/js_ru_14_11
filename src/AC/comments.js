import { ADD_COMMENT, LOAD_ALL_COMMENTS, START } from '../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export const loadAllComments = () => ({
  type: LOAD_ALL_COMMENTS,
  callAPI: '/api/comment'
})