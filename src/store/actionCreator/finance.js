import { UPDATE_INPUT, ADD_ITEM, DEL_ITEM } from '../actionTypes'

/**
  * 以下为finance组件的action
  */
export const updateInputAction = value => ({
  type: UPDATE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const delItemAction = index => ({
  type: DEL_ITEM,
  index
})
