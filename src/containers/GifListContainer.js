import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// the App component should render out the GifListContainer component 

export default class GifListContainer extends React.Component  {

  state = {
    gifData: []
  }


  fetchData = async (gifSearchInput) => {
    try{
      let res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${gifSearchInput}&api_key=dc6zaTOxFJmzC&rating=g`)
      if(!res.ok){throw res}
      let json = await res.json()
      this.handleFetchData(json)
    }catch(error){
      console.log(error)
    }
  }



  handleFetchData = (data) => {
    console.log(data)
    this.setState({
      gifData: data.data
    })
  }

  submitHandler = (event, gifSearchInput) => {
    event.preventDefault()
    this.fetchData(gifSearchInput)
  }

  render(){
    return (
      <div>
          <GifList gifData={this.state.gifData}/>
          <GifSearch submitHandler={this.submitHandler}/>
      </div>
    )
  }
}

