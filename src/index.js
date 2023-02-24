import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import App from 'components/App';
import './index.css';
import { persistStore } from 'redux-persist';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/_goit-react-hw-07-phonebook">
      <PersistGate persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
);
