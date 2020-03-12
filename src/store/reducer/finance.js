import { UPDATE_INPUT, ADD_ITEM, DEL_ITEM } from '../actionTypes'

const initFinanceState = {
  inputValue: '',
  list: ['支付宝', '财付通', '京东支付']
}

/**
  * 以下为finance组件改变store中的值
  */
export default (state = initFinanceState, action) => {
  if (action.type === UPDATE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}
