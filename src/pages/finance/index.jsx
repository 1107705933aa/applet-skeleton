import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtInput, AtButton } from 'taro-ui'
import {
  updateInputAction,
  addItemAction,
  delItemAction
} from '../../store/actionCreator/finance'
import store from '../../store'
import './index.scss'

class Finance extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  /**
   * 获取订阅的信息
   */
  storeChange() {
    this.setState(store.getState())
  }

  /**
   * 修改输入框的值
   */
  handleChangeInput(value) {
    const action = updateInputAction(value)
    store.dispatch(action)
  }

  /**
   * 添加数据
   */
  addItem() {
    const action = addItemAction()
    store.dispatch(action)
  }
  
  /**
   * 删除数据
   */
  delItem(index) {
    const action = delItemAction(index)
    store.dispatch(action)
  }

  render() {
    const { inputValue, list } = this.state.finance
    const { handleChangeInput, addItem, delItem } = this
    return (
      <View className='madp-finance'>
        <View className='madp-add'>
          <View className='at-row'>
            <View className='at-col at-col-10'>
              <AtInput
                name='inputValue'
                type='text'
                placeholder='请输入金融产品'
                value={inputValue}
                onChange={handleChangeInput}
              />
            </View>
            <View className='at-col at-col-2'>
              <AtButton type='secondary' onClick={addItem}>
                添加
              </AtButton>
            </View>
          </View>
        </View>
        <AtList>
          {list.map((item, index) => {
            return (
              <AtListItem
                key={index + item}
                title={item}
                thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                extraText='删除'
                onClick={delItem.bind(this, index)}
              />
            )
          })}
        </AtList>
      </View>
    )
  }
}

export default Finance
