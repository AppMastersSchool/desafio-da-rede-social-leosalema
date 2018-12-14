export function getPosts() {
    return JSON.parse(localStorage.getItem('data'))
}

export function getPost(id) {
    const data = getPosts()
    const info = data.profile.filter(profile => {
        return profile.id == id
    }).pop()
    console.log(info)
    return info
}

export function savePosts(values) {
    const data = JSON.stringify(values)
    return localStorage.setItem('data', data)
}