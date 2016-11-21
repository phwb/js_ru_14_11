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

    return (
      <section>
        <h3 onClick={this.handleClick}>{article.title}</h3>
        {body}
        <CommentList comments={article.comments}/>
      </section>
    )
  }

  handleClick = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article
