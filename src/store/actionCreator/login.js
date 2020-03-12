import {
  UPDATE_NAME,
  UPDATE_PSD,
  RESET_FORM,
  UPDATE_STAUS
} from '../actionTypes'

/**
  * 以下为login组件的action
  */
export const updateNameAction = value => ({
  type: UPDATE_NAME,
  value
})

export const updatePsdAction = value => ({
  type: UPDATE_PSD,
  value
})

export const resetFormAction = () => ({
  type: RESET_FORM
})

export const updateStatusAction = () => ({
  type: UPDATE_STAUS
})
