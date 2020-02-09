import React from 'react';
import './App.css';
import {MediaProvider} from './contexts/MediaContext';
import ResFilter from './components/ResFilter';

const App = () => {
  return (
    <MediaProvider>
      <ResFilter />
    </MediaProvider>
  );
};

export default App;
