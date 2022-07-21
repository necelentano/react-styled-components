import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
    </BrowserRouter>
  );
};

export default App;
