import React, { Component } from 'react'
import Comment from './Comment'

// const CommentList = props => {
//   const { comments } = props
//   const commentItems = comments.map(item => <Comment key={item.id} item={item} />)
//
//   return (
//     <ul>{commentItems}</ul>
//   )
// }

class CommentList extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
  }

  render () {
    const { isOpen } = this.state
    const { comments } = this.props
    let body = <i style={{color: '#ccc'}}>Еще никто не комментировал</i>

    if (!!comments) {
      const link = <a href="#" onClick={this.openComment}>{isOpen ? 'Закрыть' : 'Открыть'} комментарии</a>
      const commentItems = comments.map(item => <Comment key={item.id} item={item} />)
      const commentList = isOpen
        ? <ul>{commentItems}</ul>
        : null

      body = (
        <div>
          {link}
          {commentList}
        </div>
      )
    }

    return body
  }

  openComment = e => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    e.preventDefault()
  }
}

export default CommentList
