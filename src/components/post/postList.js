import React, { Component } from 'react'
import { getAll } from '../../common/storage'

class PostList extends Component {
    constructor(props){
        super(props)

        this.state = { list: null, profiles: null }
    }

    componentDidMount() {
        const data = getAll()
        console.log(data)
        this.setState({ list: data.post, profiles: data.profile }, () => console.log(this.state))
    }

    readPosts() {
        return this.state.list.map(post => {
            const profile = this.state.profiles.filter(idProfile => (idProfile.id === post.id))
            return (
                <div key={post.time}>
                    <p>{post.post}</p>
                    <p>{profile[0].name}</p>
                    <img src={profile[0].img_photo} style={{width: 30, borderRadius: '50%'}} alt=''/>
                </div>
            )
        })
        
    }

    render() {
        if (this.state.list === null) 
            return (<div>Loading...</div>)
        return(
            <div>{this.readPosts()}</div>
        )
    }
}

export default PostList