import styles from './TodoHeader.module.scss';
import {getFormattedDate} from '../../utils/DateUtils'

// export function TodoHeader(props) {
//     const now = new Date();
//     const options = { weekday: 'short', month: 'short', day: 'numeric' };
//     // console.log(now.toLocaleDateString('en-US',options))
//     console.log(props.title)  // Today
//     console.log(props.titel) // undefined
//     return (
//         <div className={styles.header}>
//             <h1>{props.title}</h1>
//             <p>{now.toLocaleDateString('en-US', options)}</p>
//         </div>
//     );
// }

export function TodoHeader({title}) {
 

    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <p>{getFormattedDate(Date.now())}</p>
        </div>
    );
}

