import { FAVOURITES, CHARACTERS, SHOW_LOADER, CURRENT_CHARACTER } from "./HomePageActionType"

const INITIAL_STATE = {
    characters: null,
    showLoader: true,
    favourites: [],
    currentCharacter: []
}

export default (state = INITIAL_STATE, action ) => {
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

        case CURRENT_CHARACTER:
            return{
                ...state,
                currentCharacter: action.payload.currentCharacter
            }

        default:
            return state
    }
}

