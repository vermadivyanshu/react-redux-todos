import React from 'react';
import './App.css';
import Todos from './components/Todos';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
