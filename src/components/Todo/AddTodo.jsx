import styles from './AddTodo.module.scss';
import { useState } from 'react';
import { TodoForm } from './TodoForm';

export function AddTodo() {
    // # Logic & State
    const [isAddMode, setIsAddMode] = useState(false);


    const handleClickAddTask = () => {
        // console.log("Open form")
        setIsAddMode(true)
    }

    // # UI
    return (
        <>
            {!isAddMode ? (
                <div className={styles.add__todo} onClick={handleClickAddTask} >
                    <span>+</span>
                    <h3>Add task</h3>
                </div>
            ) : (
                <TodoForm  onSetIsAddMode={setIsAddMode} />
            )}
        </>
    );
}
