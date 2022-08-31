import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { client } from './config/apollo';
import { CarContextProvider } from './context/carContext';
import CarForm from './pages/CarForm';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CarContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/car-form' element={<CarForm/>}/>
          </Routes>
        </BrowserRouter>
      </CarContextProvider>
    </ApolloProvider>
  )
}

export default App;
