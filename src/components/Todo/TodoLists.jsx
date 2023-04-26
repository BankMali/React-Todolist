import { TodoItem } from './TodoItem';

export function TodoLists({ todos, onEditTodo, onDeleteTodo }) {

 
    return (
        <ul>
            {todos.map((todoObj) => (
                <TodoItem key={todoObj.id} todo={todoObj} onEditTodo={onEditTodo} onDeleteTodo={onDeleteTodo}/>
            ))}
        </ul>
    );
}

// {id:1, task: asdadsasdas, status : false, due_date : 2002-04-20}
