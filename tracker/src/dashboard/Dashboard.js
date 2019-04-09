import React from 'react'

class Dashboard extends React.Component {
    state = {
        ball: '',
        strike: '',
        foul: '',
        out: ''
    }
    
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <button>Ball</button>
        <button>Strike</button>
        <button>Foul</button>
        <button>Out</button>

      </div>
    )
  }
}

export default Dashboard;
