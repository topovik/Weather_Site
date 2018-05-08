const fetchReducer = (state = {town: []}, action) => {
    switch(action.type) {

        case 'FETCH_WEATHER_LOADING':
            return {...state, status: 'LOADING'}

        case 'FETCH_WEATHER_ERROR':
            return {...state, status: 'ERROR'}

        case 'FETCH_WEATHER_SUCCESS':
            return {...state, town: action.town, status: 'SUCCESS'}
            
        default:
            return state
    }
}

export { fetchReducer }
