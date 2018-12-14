import React, { Component } from 'react'
import { savePosts } from '../../common/storage'

class PostCreate extends Component {
    constructor(props) {
        super(props)

        this.state = { post: '' }
    }

    handleChange(e) {
        this.setState({ post: e })
    }

    clickPost(){
        const newPost = {
            id: parseInt(this.props.profile),
            post: this.state.post,
            likes: 0,
            time: new Date().getTime()
        }
        this.props.onCreate(newPost)
    }

    render() {
        return(
            <div>
                <input 
                    type='text' 
                    placeholder='Diga o que está pensando' 
                    name='post' 
                    value={this.state.post} 
                    onChange={event => this.handleChange(event.target.value)}
                />
                <button onClick={this.clickPost.bind(this)}>Post</button>
            </div>
        )
    }
}

export default PostCreate