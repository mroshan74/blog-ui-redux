const initialCommentsState = []

const commentsReducer = (state = initialCommentsState, action) => {
    switch(action.type){
        case 'SET_COMMENTS':{
            return state.concat(action.payload)
        }
        default:{
            return [...state]
        }    
    }
}
export default commentsReducer