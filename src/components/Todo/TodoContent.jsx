import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';

export function TodoContent() {
    return (
        <main className='content'>
            <TodoHeader />
            <AddTodo />
            <TodoLists />
        </main>
    );
}
