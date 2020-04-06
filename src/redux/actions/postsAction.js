import axios from 'axios'

export const setPosts = (posts) => {
  return { type: 'SET_POSTS', payload: posts }
}

export const startGetPosts = (id = '') => {
  return (dispatch) => {
    if(id){
      axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => {
        const posts = response.data
        dispatch(setPosts(posts))
      })
    }
    else{
      axios.get(`https://jsonplaceholder.typicode.com/posts/`)
          .then((response) => {
          const posts = response.data
          dispatch(setPosts(posts))
    })
    }
  }
}
