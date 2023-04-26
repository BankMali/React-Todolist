import styles from './TodoItem.module.scss';
import { useState } from 'react';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { TodoForm } from './TodoForm';
import { getFormattedDate } from '../../utils/DateUtils';
import PropTypes from 'prop-types';

TodoItem.propTypes =  { 
    onAddTodo : PropTypes.func,
    onEditTodo : PropTypes.func,
    todo :  PropTypes.oneOfType([PropTypes.object])
}

//todoSchema :  {id:1, task: asdadsasdas, status : false, due_date : 2002-04-20}
export function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
    //prop = { todo:{id:1 task : "AA"}, onEditTodo: fn1, onDeleteTodo: fn2 }
    // let todo = prop.todo
    // let onEditTodo = prop.onEditTodo
    // #1 : Logic,State
    // Check === DONE === todo.status == true
    const [isEdit, setIsEdit] = useState(false);
    // console.log(todo.id)

    const handleToggleCheck = () => {
        // setIsCheck(!isCheck);
        onEditTodo(todo.id, { status: !todo.status }); // handleEditTodo(todo.id, {status:!todo.status})
    };

    const handleOpenEditMode = () => {
        setIsEdit(true);
        console.log(todo.id);
    };

    const handleDeleteTodo = () => {
        console.log('delete');
        onDeleteTodo(todo.id);
        // setTodos(currentTodos => currentTodos.filter(todoObj=> todoObj.id !== todo.id))
    };

    let checkboxStyle = todo.status ? styles.checkbox__icon__done : styles.checkbox__icon;
    let taskStyle = todo.status ? styles.done : '';
    // #2 : render
    return (
        <>
            {!isEdit ? (
                <li className={styles.todo__item__container}>
                    <div className={styles.checkbox__container} onClick={handleToggleCheck}>
                        <HiCheck className={checkboxStyle} />
                    </div>
                    <p className={taskStyle}>{todo.task}</p>
                    <span className={styles.date__text}>{getFormattedDate(todo.due_date)}</span>


                    <div className={styles.edit__icon} onClick={handleOpenEditMode}>
                        <HiPencil />
                    </div>

                    <div className={styles.delete__icon} onClick={handleDeleteTodo}>
                        <HiTrash />
                    </div>

                    {/* <div className={styles.delete__icon} onClick={()=> onDeleteTodo(todo.id)}>
                        <HiTrash />
                    </div> */}
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
