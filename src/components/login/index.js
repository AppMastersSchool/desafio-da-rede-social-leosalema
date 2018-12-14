import React, { Component } from 'react'
import data from '../../data.json'
import { getPosts, savePosts } from '../../common/storage'

class Login extends Component {
    constructor(props) {
        super(props) 

        this.state = { profiles: null }
    }

    componentWillMount() {
        if (getPosts() === null) {
            savePosts(data)
        }
        const storage = getPosts()
        this.setState({ profiles: storage.profile})
    }

    clickProfile(id) {
        this.props.history.push(`/timeline/${id}`)
    }

    renderProfiles() {
        return this.state.profiles.map(profile => (
            <div key={profile.id}>
                <button onClick={() => this.clickProfile(profile.id)}>
                    <img style={{width: 100, borderRadius: '50%'}} src={profile.img_photo} alt=''/>
                </button>
            </div>
        ))
    }

    render() {
        if (this.state.profiles === null)
            return (<div>Loading...</div>)
        return(
            this.renderProfiles()
        )
    }
}

export default Login