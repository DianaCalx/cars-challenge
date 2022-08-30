import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CarForm from './pages/CarForm';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/car-form' element={<CarForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
