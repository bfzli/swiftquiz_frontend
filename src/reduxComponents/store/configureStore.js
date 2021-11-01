import { createStore, combineReducers, applyMiddleware } from 'redux';
import questionReducer from '../reducers/Questions';
import filterReducer from '../reducers/Filters';
import logger from '../middleware/logger';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            questions: questionReducer,
            filters: filterReducer
        }),applyMiddleware(logger)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
};

export default configureStore;

