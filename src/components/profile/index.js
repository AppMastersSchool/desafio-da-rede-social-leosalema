import React, { Component } from 'react'
import { getPost } from '../../common/storage'
import PostList from '../post/postList'

class Profile extends Component {
    constructor(props) {
      super(props)

      this.state = { profile: null }
    }

    componentDidMount() {
      this.setState({ profile: getPost(this.props.match.params.id) })
    }

    render() {
      const profile = this.state.profile
      if (profile === null)
        return <div>Loading...</div>
      return (
        <div className="App">
          <button onClick={() => this.props.history.push(`/timeline/${profile.id}`)}>Voltar</button>
          <div>
            <h1>{profile.name}</h1>
            <img src={profile.img_photo} style={{width: '80px', borderRadius: '25%'}} alt=''/>
            <p>Idade: {profile.age} anos</p>
          </div>
          <hr />
          <div>
            <PostList idProfile={profile.id}/>
          </div>
        </div>
      );
    }
}

export default Profile