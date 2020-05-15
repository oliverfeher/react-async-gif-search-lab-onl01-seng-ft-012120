import React from "react";


class GifList extends React.Component
{
    
    renderGifs() {
       return this.props.gifs.map((gif, idx) => {return <li><img key={idx} src={gif} alt="" /></li>})
    }

    render()
    {
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}

export default GifList;