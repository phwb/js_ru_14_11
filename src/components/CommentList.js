import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment, loadAllComments } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        //from connect
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps(nextProps) {
      const { isOpen, comments, loadAllComments } = this.props

      if (nextProps.isOpen && !isOpen && !comments.length) {
        loadAllComments()
      }
    }

    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { isOpen, toggleOpen, loading } = this.props
        if (loading) {
          return <Loader text="Загрузка комментариев..." />
        }
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { article, comments, isOpen, addComment } = this.props
        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />
        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => {
    const { comments } = state
    // >0 не гарантирует, что эти все комменты есть. Может ты где-то в другом месте часть загрузил
    const filteredComments = comments.entities.size > 0
        ? (props.article.comments || []).map(id => comments.entities.get(id))
        : []

    return {
        comments: filteredComments,
        loading: comments.loading
    }
}, {
  addComment,
  loadAllComments
})(toggleOpen(CommentList))
