import React from 'react'

let prevArticleId = null

export default (Component) => class Accordion extends React.Component {
  state = {
    //не привязывайся к названиям сущностей в декораторах, вся их суть в том, чтобы использовать с разными компонентами и данными. Сделай openItemId
    //+ prevArticleId лишнее для этой задачи
    prevArticleId: null,
    openArticleId: null
  }

  openArticle = id => ev => {
    this.setState({
      openArticleId: id === prevArticleId
        ? null
        : id
    })

    prevArticleId = id === prevArticleId
      ? null
      : id
  }

  render() {
    return <Component {...this.props} {...this.state} openArticle={this.openArticle}/>
  }
}
