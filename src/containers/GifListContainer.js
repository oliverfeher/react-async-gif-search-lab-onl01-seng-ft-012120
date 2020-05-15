import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            gifs: []
        };
    }

    fetchGifs = (inputValue="") =>
    {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=aGmp78Y7XhHNWBWbrDlRPOlbksanbVoH&rating=g`)
        .then(response => response.json())
        .then(data => this.setState({
            gifs: data.data.slice(0, 3).map(gif => gif.images.original.url)
        }))
    }
    
    componentDidMount()
    {
        this.fetchGifs();
    }

    render()
    {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer;