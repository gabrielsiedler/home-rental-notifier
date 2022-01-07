import { ADD_ENTRY } from './actions'

export const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return action.payload
    default:
      return state
  }
}
