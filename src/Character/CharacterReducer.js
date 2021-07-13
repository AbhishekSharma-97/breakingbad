import { CURRENT_CHARACTER } from './CharacterActionType'

const INITIAL_STATE = {

    currentCharacter: []
}

export default (state = INITIAL_STATE, action ) => {
    console.log(action.type)
    switch (action.type){

        case CURRENT_CHARACTER:
            return{
                ...state,
                currentCharacter: action.payload.currentCharacter
            }

        default:
            return state
    }
}

