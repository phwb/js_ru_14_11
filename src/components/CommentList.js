import React from 'react'
import Comment from './Comment'

const CommentList = props => {
  const { comments } = props
  const commentItems = comments.map(item => <Comment key={item.id} item={item} />)

  return (
    <ul>{commentItems}</ul>
  )
}

export default CommentList
