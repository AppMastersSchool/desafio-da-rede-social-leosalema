export function getPosts() {
    return JSON.parse(localStorage.getItem('data'))
}

export function getPost(id) {
    const data = getPosts()
    const info = data.profile.filter(profile => {
        return profile.id == id
    }).pop()
    return info
}

export function savePosts(values) {
    return JSON.stringify(localStorage.setItem('data', values))
}