import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import userReducer from './redux/reducers/userReducer.js'
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoadingView from './components/LoadingView.js'; 

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };

 const pReducer = persistReducer(persistConfig, userReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(pReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export const persistor = persistStore(store);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
