import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends React.Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {
        console.log(event.target)
        event.preventDefault()
        this.props.createPost(event.target)
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                Title: <input type="text" placeholder="Title" />
                Categories: <input type="text" placeholder="Categories" />
                Contents: <textarea placeholder="Contents"> </textarea>
                <button type="submit">Post</button>
            </form>
        )
    }
}

export default connect(undefined, { createPost })(PostsNew)