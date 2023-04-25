import {useState} from 'react'
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json'

export function TodoContent() {
    // # Logic
    const [todos,setTodos] = useState(mockData)
   

    // # UI
    return (
        <main className='content'>
            <TodoHeader />
            <AddTodo />
            <TodoLists  todos={todos}/>
        </main>
    );
}
