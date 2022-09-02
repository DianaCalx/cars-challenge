import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { client } from './config/apollo';
import { AppContextProvider } from './context/appContext';
import CarForm from './pages/CarForm';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/car-form' element={<CarForm/>}/>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </ApolloProvider>
  )
}

export default App;
