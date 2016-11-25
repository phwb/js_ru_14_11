import React, { Component } from 'react'

export default class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  change = key => e => {
    this.setState({
      [key]: e.target.value
    })
  }

  render () {
    console.log(this.state)

    return (
      <table style={{marginTop: '10px'}}>
        <tbody>
          <tr>
            <td>User:</td>
            <td><input type="text" onChange={this.change('user')} defaultValue={this.state.user}/></td>
          </tr>
          <tr>
            <td>Text:</td>
            <td><textarea onChange={this.change('text')} defaultValue={this.state.text} /></td>
          </tr>
          <tr>
            <td />
            <td><input type="submit"/></td>
          </tr>
        </tbody>
      </table>
    )
  }
}