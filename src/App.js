
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import ProfileDetailsPage from './Pages/ProfileDetailsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profileDetails' element={<ProfileDetailsPage />} />
    </Routes>
  );
}

export default App;
