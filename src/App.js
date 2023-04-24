import './App.scss';
import {FaHome} from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      {/* header */}
      <header className='header'>
        <span>
          <FaHome/>
          header
        </span>
      </header>

      {/* Sidebar */}
      <aside className='sidebar'>Sidebar</aside>

      {/* Content */}
      <main className='content'>Content</main>
    </div>
  );
}

export default App;
