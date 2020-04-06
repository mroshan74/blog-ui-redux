import axios from 'axios'

export const setComments = (comments) => {
  return { type: 'SET_COMMENTS', payload: comments }
}

export const startGetComments = () => {
  //const baseURL = 'http://jsonplaceholder.typicode.com/comments'
  return (dispatch) => {
      axios
        .get(`http://jsonplaceholder.typicode.com/comments`)
        .then((response) => {
          const comments = response.data
          dispatch(setComments(comments))
        })
  }
}
