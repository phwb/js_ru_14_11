import { SUBMIT_FORM } from '../constants'
import { normalizedComments } from '../fixtures'
import { Map } from 'immutable'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new Map({}))

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case SUBMIT_FORM:
            return comments.set(payload.id, {
                id: payload.id,
                user: payload.user,
                text: payload.comment
            })
    }

    return comments
}
