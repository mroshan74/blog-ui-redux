import { createStore , combineReducers ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usersReducer from '../reducers/usersReducer'
import postsReducer from '../reducers/postsReducer'
import commentsReducer from '../reducers/commentsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        posts: postsReducer,
        comments: commentsReducer,
        users: usersReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore