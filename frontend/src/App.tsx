import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'

import './css/App.css';
import routes from './routes';

import { Provider } from 'react-redux';
import {store} from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes> 
            {routes.map((route) => {
                return <Route 
                          key={route.path}
                          path={route.path}
                          element={route.element}
                        />
              })}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
