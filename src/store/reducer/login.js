import {
  UPDATE_NAME,
  UPDATE_PSD,
  RESET_FORM,
  UPDATE_STAUS
} from '../actionTypes'

const initLoginState = {
  userName: '',
  passWord: '',
  loginStatus: '未登录'
}

/**
  * 以下为login组件改变store中的值
  */
export default (state = initLoginState, action) => {
  if (action.type === UPDATE_NAME) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.userName = action.value
    return newState
  }

  if (action.type === UPDATE_PSD) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.passWord = action.value
    return newState
  }

  if (action.type === RESET_FORM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.userName = ''
    newState.passWord = ''
    return newState
  }

  if (action.type === UPDATE_STAUS) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.loginStatus = '已登录'
    return newState
  }

  return state
}
