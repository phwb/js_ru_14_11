import { CHANGE_TEXT, SUBMIT_FORM } from '../constants'

export const changeText = formData => ({
    type: CHANGE_TEXT,
    payload: formData
})

export const submitForm = formData => ({
    type: SUBMIT_FORM,
    payload: formData
})
