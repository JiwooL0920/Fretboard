import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './css/App.css';
import routes from './routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/*switch*/}
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
