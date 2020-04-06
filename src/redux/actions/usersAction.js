import axios from 'axios'

export const setUsers = (users) => {
    return { type: 'SET_USERS', payload: users }
}

export const setUser = (user) => {
    return { type: 'SET_USER', payload:user }
}

export const startGetUsers = (id ='') => {
    const baseURL = 'http://jsonplaceholder.typicode.com/users/'
    return (dispatch) => {
        if(id){
            axios.get(`${baseURL}${id}`)
                .then(response => {
                    const user = response.data 
                    dispatch(setUser(user))
                })
            }
        else
        {
            axios.get(`${baseURL}`)
            .then(response => {
                const users = response.data 
                dispatch(setUsers(users))
            })
        }
    }
}
