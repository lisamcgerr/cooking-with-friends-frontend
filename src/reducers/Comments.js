import { LOAD_COMMENTS, CREATE_COMMENT } from '../actions/actionTypes'

function commentsReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_COMMENTS:
            return action.comments
        case CREATE_COMMENT:
            return [...state, action.comment]
        default:
            return state

    }
}

export default commentsReducer