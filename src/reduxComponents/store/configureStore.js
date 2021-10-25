import { createStore, combineReducers } from 'redux';
import questionReducer from '../reducers/Questions';
import filterReducer from '../reducers/Filters';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            questions: questionReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
};

export default configureStore;

