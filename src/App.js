import './App.css';
import styles from './style';
import Dashboard from './components/Dashboard';
import { Route, Router, Routes } from 'react-router-dom';
import DestinationPage from './pages/Destinations/destination';
import Success from './pages/Success/Success';
import Modern from './pages/Modern/Modern';
import SingleDest from './pages/singleDest/SingleDest';
function App() {
  return (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/dest' element={<DestinationPage />} />
    <Route path='/success' element={<Success />} />
    <Route path='/modern' element={<Modern />} />
    <Route path='/single/:id' element={<SingleDest />} />
  </Routes>
  );
}

export default App;
