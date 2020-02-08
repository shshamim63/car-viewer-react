import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </div>
);

export default App;
