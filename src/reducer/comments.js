import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
import { arrayToMap} from '../utils'
import { Record } from 'immutable'

const CommentModel = new Record({
  id: 0,
  user: '',
  text: ''
})

const defaultComments = arrayToMap([], CommentModel)

export default (comments = defaultComments, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})

      case LOAD_ALL_COMMENTS + START:
        return comments

      case LOAD_ALL_COMMENTS + SUCCESS:
        const { commentIds } = payload;
        return response.records.reduce((acc, item) => (
          commentIds.includes(item.id)
            ? acc.set(item.id, item)
            : acc
        ), comments)
    }

    return comments
}