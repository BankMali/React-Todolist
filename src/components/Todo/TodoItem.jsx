import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { TodoForm } from './TodoForm';

//todoSchema :  {id:1, task: asdadsasdas, status : false, due_date : 2002-04-20}
export function TodoItem({ todo, onEditTodo }) {
    // #1 : Logic,State
    // Check === DONE === todo.status == true
    const [isCheck, setIsCheck] = useState(todo.status);
    const [isEdit, setIsEdit] = useState(false);
	// console.log(todo.id)

    const handleToggleCheck = () => {
        setIsCheck(!isCheck);
    };

    const handleOpenEditMode = () => {
        setIsEdit(true);
		console.log(todo.id)
    };

    const handleDeleteTodo = () => {
        console.log('delete');
    };

    let checkboxStyle = isCheck ? styles.checkbox__icon__done : styles.checkbox__icon;
    let taskStyle = isCheck ? styles.done : '';
    // #2 : render
    return (
        <>
            {!isEdit ? (
                <li className={styles.todo__item__container}>
                    <div className={styles.checkbox__container} onClick={handleToggleCheck}>
                        <HiCheck className={checkboxStyle} />
                    </div>
                    <p className={taskStyle}>{todo.task}</p>

                    <div className={styles.edit__icon} onClick={handleOpenEditMode}>
                        <HiPencil />
                    </div>

                    <div className={styles.delete__icon} onClick={handleDeleteTodo}>
                        <HiTrash />
                    </div>
                </li>
            ) : (
                <TodoForm
                    submitText='Edit task'
                    onSetIsShowForm={setIsEdit}
                    // oldTask={todo.task}
                    onEditTodo={onEditTodo}
					todo={todo}
                />
            )}
        </>
    );
}
