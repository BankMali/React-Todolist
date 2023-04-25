import { TodoItem } from './TodoItem';

export function TodoLists() {
    const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);

    return (
        <ul>
            {mockTodo.map((el) => (
                <TodoItem  key={el}/>
            ))}
        </ul>
    );
}
