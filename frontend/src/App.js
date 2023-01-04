 import React from 'react';
 import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Hotels from './pages/hotels/Hotels';
import List from './pages/list/List';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotels/:id' element={<Hotels/>} />
      </Routes>
    </>
  );
}

export default App;
