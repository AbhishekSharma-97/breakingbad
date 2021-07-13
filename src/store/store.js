import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import HomePageReducer from '../HomePage/HomePageReducer'
import CharacterReducer from '../Character/CharacterReducer';

const middleWare = applyMiddleware(thunk);

const reducers = combineReducers({
    home: HomePageReducer,
    character: CharacterReducer
})

let store = createStore(reducers,middleWare)

export default store