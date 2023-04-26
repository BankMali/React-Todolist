import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
// import mockData from '../../data/todos.json';

export function TodoContent({todos,setTodos}) {
    // # Logic
    // const [todos, setTodos] = useState(mockData);

    // ADD-TODO
    const handleAddTodo = (newTask) => {
        // มี new todo
        let newTodoObj = { id: uuidv4(), task: newTask, status: false, due_date: '' };

        // สร้าง state ใหม่
        // update state โดย new state
        // const newTodos = [newTodoObj, ...todos];
        // setTodos(newTodos);

        // update state โดย callback
        setTodos(currentState=> [newTodoObj,...currentState])
    };

    // UPDATE-TODO
    // updateValue = {task: "Newtask", status : false}
    const handleEditTodo = (todoId,updateObj) => {

        // Modify Array 
        // #1 FindIndex
        const foundedIndex = todos.findIndex(todoObj=> todoObj.id === todoId)
        // Not founded
        if(foundedIndex == -1) return;
        // Founded
        const newTodos = [...todos]
        // let oldTodoObj = newTodos[foundedIndex]
        // oldTodoObj.task = newTask

        newTodos[foundedIndex] = { ...newTodos[foundedIndex], ...updateObj } // ...{task: "Newtask", status : false}
        newTodos[foundedIndex] = Object.assign({},newTodos[foundedIndex],updateObj)
        
        // ...newTodos[foundedIndex] === {id:1, task : "AAA",status:false : due_date: "2023-04-29"}
        // 
        // { "id": 4, "task": "In congue. Etiam justo.", "status": false, "due_date": "2023-05-04" },
        setTodos(newTodos)
    }

    const handleDelete = (todoId) => {

        // Logic : Manipulate Array

        // #1
        // const foundedIndex = todos.findIndex(todoObj => todoObj.id === todoId)
        // if(foundedIndex == -1) return;
        // const newTodos = [...todos]
        // newTodos.splice(foundedIndex,1)
        // setTodos(newTodos)

        // #2
        setTodos(curr=> curr.filter((todoObj)=> todoObj.id !== todoId))
    }
 

    // # UI
    return (
        <main className='content'>
            <TodoHeader title="Today"/>
            <AddTodo  onAddTodo={handleAddTodo}/>
            <TodoLists todos={todos}  onEditTodo={handleEditTodo} onDeleteTodo={handleDelete}/>
        </main>
    );
}
