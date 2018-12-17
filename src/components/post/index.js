import React, { Component } from 'react'
import { getPosts } from '../../common/storage'

class Post extends Component {
    constructor(props) {
        super(props) 

        this.state = { likes: null }
    }

    componentDidMount() {
        this.setState({ likes: this.props.post.likes})
    }

    clickLikes() {
        this.setState({ likes: this.state.likes + 1 }, () => this.saveLikes())
    }

    saveLikes() {
        const posts = getPosts()
        const updatePosts = posts.post.map(savedPost => {
            if(savedPost.time === this.props.post.time) {
                savedPost.likes = this.state.likes
            }
            return savedPost
        })
        return updatePosts
    }

    render() {
        const post = this.props.post
        const profile = this.props.profile
        return(
            <div style={container}>
                <p onClick={() => this.props.onNavigate()}>{profile.name}</p>
                <img 
                    src={profile.img_photo} 
                    style={{width: '40px', borderRadius: '50%'}} 
                    alt='' 
                    onClick={() => this.props.onNavigate()}
                />
                <h3>{post.post}</h3>
                <p>Likes: {this.state.likes}</p>
                <button onClick={this.clickLikes.bind(this)}>
                    Likes
                </button>
            </div>
        )
    }
}

const container = {
    'margin': '20px',
    'padding': '10px',
    'border': '1px solid #87CEEB',
    'backgroundColor': '#F0FFFF',
    'color': '#1E90FF'
}

export default Post