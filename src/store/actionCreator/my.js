import { INIT_PRODUCT } from '../actionTypes'

/**
  * 以下为my组件的action
  */
const initProductAction = data => ({
  type: INIT_PRODUCT,
  data
})

export default initProductAction
