import { LOAD_COMMENTS } from '../actions/actionTypes'

function commentsReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_COMMENTS:
            return action.comments
        default:
            return state

    }
}

export default commentsReducer