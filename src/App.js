import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RoutesFile from './Components/RoutesFile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesFile />
      </BrowserRouter>
    </div>
  );
}

export default App;
