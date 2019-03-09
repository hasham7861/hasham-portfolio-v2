import {CHANGE_HEADING_SIZE} from '../constants/actionTypes'

const intialHeadingState = {
  headerStyle: {
    bottom: '0px'
  },
  headerState:'BIG'
}
const headerStateChange = (state = intialHeadingState, action) => {
  switch (action.type){
    case CHANGE_HEADING_SIZE:
        return Object.assign({}, state, {
            headerStyle: {
              //  Changing size of header when swiping up
              bottom: action.headerState.headerStyle.bottom,
            },
            headerState: action.headingState.headerState
          })
    default:
      return state
  }
}

export default headerStateChange;
