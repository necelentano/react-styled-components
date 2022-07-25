import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;
