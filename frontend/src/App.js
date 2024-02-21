import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
