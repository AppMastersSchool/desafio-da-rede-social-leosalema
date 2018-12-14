import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props) 

        this.state = { likes: null }
    }

    componentDidMount() {
        this.setState({ likes: this.props.post.likes})
    }

    clickLikes() {
        this.setState({ likes: this.state.likes + 1 })
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
                <p style={buttonLike}>Likes: {this.state.likes}</p>
                <button onClick={this.clickLikes.bind(this)}>
                    Likes
                </button>
            </div>
        )
    }
}

const buttonLike = {

}

const container = {
    'margin': '20px',
    'padding': '10px',
    'border': '1px solid #87CEEB',
    'backgroundColor': '#F0FFFF',
    'color': '#1E90FF'
}

export default Post