import React, { Component } from 'react'
import { getPosts, savePosts } from '../../common/storage'
import Post from './'
import PostCreate from './postCreate'

class PostList extends Component {
    constructor(props){
        super(props)

        this.state = { post: null, profile: null }
    }

    componentDidMount() {
        const data = getPosts()
        this.setState({ post: data.post, profile: data.profile })
    }

    onNavigate(profiles) {
        this.props.history.push(`/profile/${profiles.id}`)
    }

    readPosts() {
        return this.state.post.map(post => {
            const profile = this.state.profile.filter(idProfile => (idProfile.id === post.id)).pop()
            return (
                <Post 
                    key={post.time} 
                    post={post} 
                    profile={profile}
                    onNavigate={() => this.onNavigate(profile)}
                    getLike={() => this.update(post)}
                />
            )
        })
    }

    readMyPosts() {
        const myPosts = this.state.post.filter(post => post.id === this.props.idProfile)
        const profile = this.state.profile.filter(idProfile => (idProfile.id === this.props.idProfile)).pop()
        return myPosts.map(myPost => 
            <Post 
                key={myPost.time} 
                post={myPost} 
                profile={profile}
                onNavigate={() => this.onNavigate(profile)}
                getLike={() => this.savePost(myPost)}
            />
        )
    }

    savePost(post) {
        const myPosts = this.state.post
        myPosts.unshift(post)
        this.setState({ post: myPosts})
        savePosts(this.state)
    }

    render() {
        if (this.state.post === null) {
            return <div>Loading...</div>
        } else if (this.props.idProfile == null) {
            return (
                <div>
                    <PostCreate profile={this.props.match.params.id} onCreate={this.savePost.bind(this)}/>
                    {this.readPosts()}
                </div>
            )
        }
        else {
            return (
                <div>
                    <PostCreate profile={this.props.idProfile}/>
                    {this.readMyPosts()}
                </div>
            )
        }
        
    }
}

export default PostList