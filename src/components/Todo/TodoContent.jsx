import { useState } from 'react';
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json';
import { v4 as uuidv4 } from 'uuid';

export function TodoContent() {
    // # Logic
    const [todos, setTodos] = useState(mockData);
    // console.log(uuidv4())
    // console.log(uuidv4())
    // console.log(uuidv4())


    const handleAddTodo = () => {
        // มี new todo
        let newTodoObj = { id: uuidv4(), task: 'DoHW', status: false, due_date: '' };

        // สร้าง state ใหม่
        // update state โดย new state
        // const newTodos = [newTodoObj, ...todos];
        // setTodos(newTodos);

        // update state โดย callback
        setTodos(currentState=> [newTodoObj,...currentState])
    };

    // # UI
    return (
        <main className='content'>
            <TodoHeader />
            <AddTodo />
            <button onClick={handleAddTodo}>Test Add Todo</button>
            <TodoLists todos={todos} />
        </main>
    );
}
