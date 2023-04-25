import styles from './AddTodo.module.scss';
import { TodoForm } from './TodoForm';


export function AddTodo() {
    return (
        <>
            <div className={styles.add__todo}>
                <span>+</span>
                <h3>Add task</h3>
            </div>

            <TodoForm />
        </>
    );
}
