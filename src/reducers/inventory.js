import { ADD_ITEM } from '../actions/add-item'
import { REMOVE_ITEM } from '../actions/remove-item'


export default function updateInventory( state = [], { type, payload  } ){
  switch (type) {
    case ADD_ITEM:
    const newState = state.concat([payload])
    console.log(newState)
      return state.concat([payload])

      case REMOVE_ITEM:
      const index = payload
      const bong = state.splice(index,1);
      console.log(bong)
      return state

    default :
      return state
  }
}
