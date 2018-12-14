// Criar uma forma do postList ter o id do usuario assim que ele clicar no login
import React, { Component } from 'react'
import { getPosts } from '../../common/storage'
import Post from './'
import PostCreate from './postCreate'

class PostList extends Component {
    constructor(props){
        super(props)

        this.state = { list: null, profiles: null }
    }

    componentDidMount() {
        const data = getPosts()
        this.setState({ list: data.post, profiles: data.profile })
    }

    onNavigate(profiles) {
        this.props.history.push(`/profile/${profiles.id}`)
    }

    readPosts() {
        return this.state.list.map(post => {
            const profile = this.state.profiles.filter(idProfile => (idProfile.id === post.id)).pop()
            return (
                <Post 
                    key={post.time} 
                    post={post} 
                    profile={profile}
                    onNavigate={() => this.onNavigate(profile)}
                />
            )
        })
    }

    readMyPosts() {
        const myPosts = this.state.list.filter(post => post.id === this.props.idProfile)
        const profile = this.state.profiles.filter(idProfile => (idProfile.id === this.props.idProfile)).pop()
        return myPosts.map(myPost => 
            <Post 
                key={myPost.time} 
                post={myPost} 
                profile={profile}
                onNavigate={() => this.onNavigate(profile)}
            />
        )
    }

    render() {
        if (this.state.list === null) {
            return <div>Loading...</div>
        } else if (this.props.idProfile == null) {
            return (
                <div>
                    <PostCreate profile={this.props.idProfile}/>
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