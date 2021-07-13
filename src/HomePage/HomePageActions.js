import { Actions } from "react-native-router-flux"
import { FAVOURITES, CHARACTERS, SHOW_LOADER, CURRENT_CHARACTER } from "./HomePageActionType"

const BaseURL = 'https://www.breakingbadapi.com'

export const getCharacters = () => {
    return (dispatch, getState) => {
        fetch(BaseURL+'/api/characters',{
            method:'GET',
            headers:{
                'Content-type':'applications/json;charset=utf-8'
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            dispatch({
                type: CHARACTERS, 
                payload: { 
                    characters: resp 
                }
            })
            dispatch({
                type: SHOW_LOADER, 
                payload: { 
                    showLoader: false 
                }
            })

            console.log(getState().home.characters)
        })
        .catch(err => console.log(err))
    }
}

export const addToFavourites = (item) => {
    return(dispatch, getState) => {

        var fav = getState().home.favourites
        console.log(fav);
        var data = [...fav, item]

        dispatch({
            type: FAVOURITES,
            payload: {
                favourites: data
            }
        })
    }
}

export const removeFavourites = (item) => {
    return(dispatch, getState) => {

        var data = getState().home.favourites
        var index = data.indexOf(item);
        console.log(index);
        data.splice(index,1);

        dispatch({
            type: FAVOURITES,
            payload: {
                favourites: data
            }
        })
    }
}


export const searchData = (searchInput) => {
    return(dispatch, getState) => {
        console.log('It ran');
        fetch(BaseURL+'/api/characters?name='+searchInput)
        .then(resp => resp.json())
        .then(resp => {
            dispatch({
                type: CHARACTERS,
                payload: {
                    characters: resp
                }
            })
            console.log(resp);
        })
    }
}


