import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

export function Sidebar() {
    return (
        <aside className='sidebar'>
            <section className='sidebar__generic'>
                <ul className='generic__lists'>
                    <li className='active'>
                        <span>
                            <FaInbox />
                        </span>
                        <h6>Inbox</h6>
                    </li>
                    <li>
                        <span>
                            <FaCalendar />
                        </span>
                        <h6>Today</h6>
                    </li>
                    <li>
                        <span>
                            <FaCalendarAlt />
                        </span>
                        <h6>Next 7 Days</h6>
                    </li>
                </ul>
            </section>
            <section className='sidebar__middle'>
                <span>
                    <FaChevronDown />
                </span>
                <h6>Projects</h6>
            </section>
            <section className='sidebar__projects'>
                <ul className='project__lists'>
                    <li className=''>
                        <span>
                            <FaInbox />
                        </span>
                        <h6>Project-A</h6>
                    </li>
                    <li>
                        <span>
                            <FaInbox />
                        </span>
                        <h6>Project-B</h6>
                    </li>
                </ul>
            </section>
        </aside>
    );
}
