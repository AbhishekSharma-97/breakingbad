import { Actions } from 'react-native-router-flux'
import { CURRENT_CHARACTER } from './CharacterActionType'

export const CharacterScreen = (item) => {
    return(dispatch, getState) => {

        dispatch({
            type: CURRENT_CHARACTER,
            payload: {
                currentCharacter: item
            }
        })
        Actions.Character()
    }
}