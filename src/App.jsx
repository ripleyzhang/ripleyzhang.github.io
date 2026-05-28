import React from 'react';

import '98.css';
import './style.css';

import DataService from './services/dataService';
import DataContext from './contexts/dataContext';
import Desktop from './components/Desktop';

const dataService = new DataService();

function App() {
  return (
    <DataContext.Provider value={dataService}>
      <Desktop />
    </DataContext.Provider>
  );
}

export default App;