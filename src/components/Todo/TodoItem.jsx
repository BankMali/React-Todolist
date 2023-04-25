import styles from './TodoItem.module.scss';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';

export function TodoItem() {
    return (
        <li className={styles.todo__item__container}>
            <div className={styles.checkbox__container}>
                <HiCheck className={styles.checkbox__icon} />
            </div>
            <p className={styles.done}>{`task`}</p>

            <div className={styles.edit__icon}>
                <HiPencil />
            </div>

            <div className={styles.delete__icon}>
                <HiTrash />
            </div>
        </li>
    );
}
