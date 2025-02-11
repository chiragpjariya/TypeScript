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


//************************************************************************************************************************************************* */
// ? extends interface.


interface Book {
    bookName: string,
    bookPrice: number,
}

interface Ebook extends Book {
    fileSize: number,
    fileFormate: string
}

interface AudioBook extends Ebook {
    duration: number
}


const bookSummery: AudioBook = {
    bookName: 'herry potar',
    bookPrice: 500,
    fileFormate: 'mp4',
    duration: 200,
    fileSize: 5
}

//************************************************************************************************************************************************ */