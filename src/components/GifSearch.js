import React from "react";

class GifSearch extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    handleOnChange = event =>
    {
        event.persist();
        this.setState({
            inputValue: event.target.value
        })
    }

    handleOnSubmit = event =>
    {
        event.preventDefault();
        this.props.fetchGifs(this.state.inputValue)
    }

    
    render()
    {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label><b>Enter a Search Term:</b></label>
                <br />
                <input type="text" value={this.state.inputValue} onChange={this.handleOnChange} on/>
                <br />
                <button>Find Gifs</button>
            </form>
        )
    }
}

export default GifSearch;