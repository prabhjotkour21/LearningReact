import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
            createdAt: 123456,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    deleteTodo: (id) => { },
    toggleComplete:(id)=>{},
    
})


export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoProvider=TodoContext.Provider