const stateText = (state = {text: ''}, action) => {
    switch(action.type) {
        case 'ADD_TEXT':
            return {...state, text: action.text}

        default:
            return state
    }
}

export { stateText }