import React, { Component } from 'react'

export default class CommentForm extends Component {
  render () {
    return (
      <table style={{marginTop: '10px'}}>
        <tbody>
          <tr>
            <td>User:</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>Text:</td>
            <td><textarea /></td>
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