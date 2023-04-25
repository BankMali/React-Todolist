import styles from './TodoHeader.module.scss'

export function TodoHeader () {

	const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    // console.log(now.toLocaleDateString('en-US',options))

	return (
		<div className={styles.header}>
		<h1>Inbox</h1>
		<p>{now.toLocaleDateString('en-US', options)}</p>
	</div>
	)
}