

const usersReducer=(state=[],action)=>
{
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload
         case 'UPDATE_CURRENT_USER' :
            return state.map((user)=>user._id===action.payload._id? {...user,...action.payload}:user)  
       
        default:
           return state;

    }
}
export default usersReducer;