import { CHANGE_HEADING_SIZE, RESET_HEADING_SIZE } from '../constants/actionTypes'

const intialHeadingState = {
  headerStyle: {
    paddingTop: '100px'
  },
  headerState:'BIG',
  classNames: 'heading'
}
const headerStateChange = (state = intialHeadingState, action) => {
  switch (action.type){
    case CHANGE_HEADING_SIZE:
        return Object.assign({}, state, {
            headerStyle: {
              //  Changing size of header when swiping up
              paddingTop: action.headingState.headerStyle.paddingTop,
            },
            headerState: action.headingState.headerState,
            classNames: action.headingState.classNames
          })
    case RESET_HEADING_SIZE:
          return intialHeadingState
    default:
      return state
  }
}

export default headerStateChange;
