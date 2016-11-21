import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false,
      //компонент перегруженный выходит, внеси этот стейт в CommentList
      isCommentOpen: false
    }
  }

  render () {
    const { article } = this.props
    const body = this.state.isOpen ? <p>{article.text}</p> : null

    const { isCommentOpen } = this.state
    const { comments } = article

    let link = <i style={{color: '#ccc'}}>Еще никто не комментировал</i>
    let commentList = null

    if (!!comments) {
      link = <a href="#" onClick={this.openComment}>{isCommentOpen ? 'Закрыть' : 'Открыть'} комментарии</a>
      commentList = isCommentOpen
        ? <CommentList comments={article.comments}/>
        : null
    }

    return (
      <section>
        <h3 onClick={this.handleClick}>{article.title}</h3>
        {body}
        {link}
        {commentList}
      </section>
    )
  }

  openComment = e => {
    this.setState({
      isCommentOpen: !this.state.isCommentOpen
    })
    e.preventDefault()
  }

  handleClick = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article
