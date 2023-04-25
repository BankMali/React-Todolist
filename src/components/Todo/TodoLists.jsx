import { TodoItem } from './TodoItem';

export function TodoLists({ todos, onEditTodo }) {
    return (
        <ul>
            {todos.map((todoObj) => (
                <TodoItem key={todoObj.id} todo={todoObj} onEditTodo={onEditTodo} />
            ))}
        </ul>
    );
}

// {id:1, task: asdadsasdas, status : false, due_date : 2002-04-20}
