import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'

import './css/App.css';
import routes from './routes';


function App() {
  return (
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
  );
}

export default App;
