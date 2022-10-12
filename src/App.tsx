import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { client } from './config/apollo';
import { AppContextProvider } from './context/appContext';
import CarDetails from './pages/car-details';
import CarForm from './pages/car-form';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/car-form" element={<CarForm />} />
            <Route path="/favorites" element={<Dashboard />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </ApolloProvider>
  );
};

export default App;
