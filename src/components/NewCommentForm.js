import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeText, submitForm } from '../AC/form'

class NewCommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        const { changeText } = this.props

        changeText({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        const { articleId, formData, changeText, submitForm } = this.props

        if (formData.user.length < 3 || formData.comment.length < 3) {
            return
        }

        submitForm({...formData, articleId})
        changeText({
            user: '',
            comment: ''
        })
        ev.preventDefault()
    }

    render() {
        const { formData } = this.props
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={formData.comment} onChange = {this.handleChange('comment')}/>
                user: <input type="text" value={formData.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect((state, props) => ({
    formData: state.form,
    articleId: props.articleId
}), { changeText, submitForm })(NewCommentForm)
