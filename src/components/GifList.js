import React from 'react'

// the App component should render out the GifListContainer component 

export default class GifList extends React.Component  {
  render(){
    return (
      <ul>
        {this.generateGifs()}
      </ul>
    )
  }

  generateGifs = () => {
    console.log(this.props.gifData)
    if(this.props.gifData.length > 0){
      return this.props.gifData.map(gif => {
        return (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt="gif-result"></img>
          </li>
        )
      })
    }
  }
}

