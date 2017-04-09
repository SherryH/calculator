import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from './reducer';


const configureStore = () => {
  const middleWares = [];
  if (!process.env.NODE) {
    middleWares.push(logger);
  }

  return createStore(reducer, applyMiddleware(...middleWares));
};
export default configureStore;
