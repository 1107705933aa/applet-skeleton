import Taro, { Component } from '@tarojs/taro'
import { AtInput, AtButton, AtMessage, AtForm } from 'taro-ui'
import { View } from '@tarojs/components'
import store from '../../store'
import {
  updateNameAction,
  updatePsdAction,
  resetFormAction,
  updateStatusAction
} from '../../store/actionCreator/login'
import './index.scss'
import fetchLogin from '../../api/login'

class Log extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePsd = this.handleChangePsd.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onReset = this.onReset.bind(this)
    store.subscribe(this.storeChange)
  }
  
  /**
   * 设置顶部标题
   */
  config = {
    navigationBarTitleText: '登录'
  }
  
  /**
   * 获取订阅的信息
   */
  storeChange() {
    this.setState(store.getState())
  }

  /**
   * 改变用户名输入框的内容
   */
  handleChangeName(value) {
    const action = updateNameAction(value)
    store.dispatch(action)
  }
  
  /**
   * 改变密码输入框的内容
   */
  handleChangePsd(value) {
    const action = updatePsdAction(value)
    store.dispatch(action)
  }

  /**
   * 提交登录
   */
  onSubmit() {
    /**
     * 获取登录的账号和密码
     */
    fetchLogin().then(res => {
      const loginDatas = res.data.log
        for (let i = 0; i < loginDatas.length; i++) {
          if (
            this.state.login.userName === loginDatas[i].name &&
            this.state.login.passWord === loginDatas[i].password
          ) {
            Taro.navigateTo({ url: '/pages/index/index' })
          } else if (
            this.state.login.userName != loginDatas[i].name ||
            this.state.login.passWord != loginDatas[i].password
          ) {
            const action = updateStatusAction()
            store.dispatch(action)
            this.handleClick()
          }
        }
    })
  }

  handleClick() {
    Taro.atMessage({
      message: '登陆失败！',
      type: 'error'
    })
  }

  /**
   * 重置输入框
   */
  onReset() {
    const action = resetFormAction()
    store.dispatch(action)
  }

  render() {
    const { userName, passWord } = this.state.login
    const { handleChangeName, handleChangePsd, onSubmit, onReset } = this
    return (
      <View className='madp-log'>
        <AtForm>
          <AtInput
            name='userName'
            title='账号'
            type='text'
            placeholder='请输入账号'
            value={userName}
            onChange={handleChangeName}
          />
          <AtInput
            name='passWord'
            title='密码'
            type='password'
            placeholder='请输入密码'
            value={passWord}
            onChange={handleChangePsd}
          />
          <View className='at-row'>
            <View className='at-col at-col-6'>
              <AtButton formType='submit' onClick={onSubmit}>
                提交
              </AtButton>
            </View>
            <View className='at-col at-col-6'>
              <AtButton formType='reset' onClick={onReset}>
                重置
              </AtButton>
            </View>
          </View>
        </AtForm>
        <AtMessage />
      </View>
    )
  }
}

export default Log
