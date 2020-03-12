import { INIT_PRODUCT } from '../actionTypes'

const initLogState = {
  data: []
}

/**
  * 以下为my组件改变store中的值
  */
export default (state = initLogState, action) => {
  if (action.type === INIT_PRODUCT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.data = action.data
    return newState
  }

  return state
}
