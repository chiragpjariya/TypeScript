//! InterFaces

interface Todo {
    id: number,
    tital: string,
    isActive: boolean
}

interface Todolist {
    todos: Todo[]
}


const todoList: Todolist = {
    todos: [
        {
            id: 1,
            tital: 'first todo',
            isActive: false
        }
    ]
}

