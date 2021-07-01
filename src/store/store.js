import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import HomePageReducer from '../HomePage/HomePageReducer'

const middleWare = applyMiddleware(thunk);

const reducers = combineReducers({
    home: HomePageReducer
})

let store = createStore(reducers,middleWare)

export default store