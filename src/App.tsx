// permet la création de Routes
// viens de ---> npm i react-router-dom@latest
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Posts from './Layout/Posts';
import Post from './Layout/Post';


function App () {
  return (
    <div className="App">
      {/* Créé le Browser des routes */}
      <BrowserRouter>
        {/* Créé les routes */}
        <Routes>
          {/* Créé une route au path '/' qui va render la page Posts*/}
          <Route path='/' element={<Posts/>}/>
          {/* Créé une route au path '/:id' qui va render la page Post*/}
          <Route path='/:id' element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
