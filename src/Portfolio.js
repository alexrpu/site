import React, { Component } from 'react'

export class Portfolio extends Component {
  render() {
    return (
    <div class="flex-col space-y-3">
      <div>
        <h1>Portfolio</h1>
      </div>
      <div class="border-4 border-blue-300 rounded-lg p-3">
        <h2>BC Centre for Aquatic Health Sciences</h2>
      </div>
      <div>
        <h2>Terra Studium</h2>
      </div>
      <div>
        <h2>SkillStreaks</h2>
      </div>
    </div>
    )
  }
}

export default Portfolio