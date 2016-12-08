import { CHANGE_TEXT } from '../constants'

const initialState = {
    user: '',
    comment: ''
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case CHANGE_TEXT:
            return {...state, ...payload}
    }

    return state
}
