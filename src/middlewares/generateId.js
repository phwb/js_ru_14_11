import { SUBMIT_FORM } from '../constants'

function generateId() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export default store => next => action => {
    const { type } = action

    switch (type) {
        case SUBMIT_FORM:
            action.payload.id = generateId()
            break;
    }
    next(action)
}
