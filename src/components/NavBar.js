import React from 'react'

export default class NavBar extends React.Component  {

  state = {
    black: 'navbar-inverse',
    white: 'navbar-default', 
  }

  render(){
    return (
      <nav className={`navbar color ${this.props.color}`}>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand'>
              { this.props.title }
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
