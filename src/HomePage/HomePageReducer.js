import { FAVOURITES, CHARACTERS, SHOW_LOADER } from "./HomePageActionType"

const INITIAL_STATE = {
    characters: null,
    showLoader: true,
    favourites: []
}

export default ( state = INITIAL_STATE, action ) => {
    console.log(action.type)
    switch (action.type){
        case CHARACTERS:
            return{
                ...state,
                characters: action.payload.characters,
            }
        
        case SHOW_LOADER:
            return{
                ...state,
                showLoader: action.payload.showLoader
            }
        
        case FAVOURITES:
            return{
                ...state,
                favourites: action.payload.favourites
            }
    
        default:
            return state
    }
}

