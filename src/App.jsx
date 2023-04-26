import './App.scss'; // Global
import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TodoContent } from './components/Todo/TodoContent';
import mockData from './data/todos.json';

function App() {
    const [todos, setTodos] = useState(mockData);

    // Filter Todo

    const handleFilterLists = (index) => {
        // idx == 0  : All
        // idx == 1 : today
        // idx == 2 : next 7
        console.log('selected', index);

        // FILTER LOGIC : Schema for fillter "2023-04-29" == YYYY-MM-DD
        if (index === 0) setTodos(mockData); // mockData === All todo
        else if (index === 1) {
            const nowObj = new Date();
            let nowStr = nowObj.toISOString().slice(0, 10); // "2023-04-26"
            const filteredTodo = todos.filter((todoObj) => todoObj.due_date === nowStr);
            setTodos(filteredTodo);
        } else if (index === 2) {
            const nowObj = new Date();
            let nowStr = nowObj.toISOString().slice(0, 10);

            const nextSevenDayObj = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000);
            let nextSevenDayStr = nextSevenDayObj.toISOString().slice(0, 10);

            const filteredTodo = mockData.filter(
                (todoObj) => todoObj.due_date >= nowStr && todoObj.due_date <= nextSevenDayStr
            );
            setTodos(filteredTodo)
        }
    };

    return (
        <div className='container'>
            <Header />
            <Sidebar onSelectTab={handleFilterLists} />
            <TodoContent todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
