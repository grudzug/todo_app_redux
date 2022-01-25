const initialState = ""

export function userSlice(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER': 
        return {
          ...state,
          name: action.payload
        }
      default:
        return state
  }
}