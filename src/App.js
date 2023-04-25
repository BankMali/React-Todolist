import './App.scss';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'
import { TodoContent } from './components/Todo/TodoContent';
function App() {
  const mockTodo = Array.from({length:5},(el,idx) => idx+1)
  console.log(mockTodo)
  return (
    <div className="container">
      {/* header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <TodoContent />

    </div>
  );
}

export default App;
