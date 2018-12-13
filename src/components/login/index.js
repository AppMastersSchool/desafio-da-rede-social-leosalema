import React, { Component } from 'react'
import { getAll } from '../../common/storage'

class Login extends Component {
    constructor(props) {
        super(props) 

        this.state = { profiles: null }
    }

    componentWillMount() {
        const data = getAll()
        this.setState({ profiles: data.profile})
    }

    clickProfile() {
        this.props.history.push('/profile')
    }

    renderProfiles() {
        console.log(this.state.profiles)
        return this.state.profiles.map( profile => (
            <div key={profile.id}>
                <button onClick={this.clickProfile.bind(this)}>
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