import { FaHome } from 'react-icons/fa';

export function Header() {
    return (
        <header className='header'>
            <span>
                <FaHome />
            </span>
            <h3>CC-Todoist</h3>
        </header>
    );
}
