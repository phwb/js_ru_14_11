import React from 'react'

const Comment = props => {
  const { item } = props
  const { user, text } = item

  return (
    <li style={{margin: '5px 0'}}>
      <b>Пользователь</b>: <i>{user}</i><br/>
      <b>Текст комментария</b>: {text}
    </li>
  )
}

export default Comment