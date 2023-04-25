import { TodoItem } from './TodoItem';

export function TodoLists({todos}) {
   

    return (
        <ul>
            {todos.map((todoObj) => (
                <TodoItem  key={todoObj.id} todo={todoObj}/>
            ))}
        </ul>
    );
}


// {id:1, task: asdadsasdas, status : false, due_date : 2002-04-20}