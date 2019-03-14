import { CHANGE_HEADING_SIZE } from '../constants/actionTypes'

const intialHeadingState = {
  headerStyle: {
    paddingBottom: '0px',
    paddingTop: '100px'
  },
  headerState:'BIG'
}
const headerStateChange = (state = intialHeadingState, action) => {
  switch (action.type){
    case CHANGE_HEADING_SIZE:
        return Object.assign({}, state, {
            headerStyle: {
              //  Changing size of header when swiping up
              paddingBottom: action.headingState.headerStyle.paddingBottom,
              paddingTop: action.headingState.headerStyle.paddingTop,
            },
            headerState: action.headingState.headerState
          })
    default:
      return state
  }
}

export default headerStateChange;
