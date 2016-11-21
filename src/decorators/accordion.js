import React from 'react'

export default (Component) => class Accordion extends React.Component {
  state = {
    openArticleId: null
  }

  openArticle = id => ev => {
    this.setState({
      openArticleId: id
    })
  }

  render() {
    return <Component {...this.props} {...this.state} openArticle={this.openArticle}/>
  }
}