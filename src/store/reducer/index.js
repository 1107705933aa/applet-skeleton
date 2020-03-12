/**
 * 合并reducers
 */
import { combineReducers } from 'redux'
import login from './login'
import finance from './finance'
import my from './my'

/**
  * 合并reducers的值
  */
const rootReducers = combineReducers({
  login,
  finance,
  my
})

export default rootReducers
