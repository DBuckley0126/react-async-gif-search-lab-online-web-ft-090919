import React from 'react'


// the App component should render out the GifListContainer component 

export default class GifSearch extends React.Component  {
  state = {
    gifSearchInput: ""
  }

  handleInputChange = (event) => {
    console.log(event)
    this.setState({
      [event.target.className]: event.target.value
    })    
  }

  render(){
    return (
      <div className="searchForm">
        <input type='text' className="gifSearchInput" onChange={event => {this.handleInputChange(event)}} value={this.state.gifSearchInput}/>
        <input type='submit' onClick={event => {this.props.submitHandler(event, this.state.gifSearchInput)}}/>        
      </div>
    )
  }
}

