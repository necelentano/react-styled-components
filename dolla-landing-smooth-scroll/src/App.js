import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages';
import SigninPage from './pages/signin';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SigninPage />} />
    </Routes>
  );
};

export default App;
