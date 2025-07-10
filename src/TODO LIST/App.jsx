import { useReducer } from "react"

function App(){

const hendleAddTodo = () = {
    if(input.trim()) {
        dispatch({type: 'ADD_TODO', payload: input});
        setInput('');
    }
}
const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        title: action.payload,
                        completed: false,
                    },
                ],
            }
    }

}

const handleEditTode =( id, title) => {
    setEditId(id);
    setEdiTile(title);
};

(state.todos.map((todo) => (
    
)))

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            