import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import initProductAction from '../../store/actionCreator/my'
import store from '../../store'
import fetchMy from '../../api/my'

class My extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  componentDidMount() {
    /**
     * 获取标题和图片
     */
    fetchMy().then(res => {
      const data = res.data.data
      const action = initProductAction(data)
      store.dispatch(action)
    })
  }

  /**
   * 获取订阅信息
   */
  storeChange() {
    this.setState(store.getState())
  }

  render() {
    const { data } = this.state.my
    return (
      <View>
        {data.map((item, index) => {
          return (
            <View className='at-row' key={index + item}>
              <Text>{item.title}</Text>
              <Image src={item.image} />
            </View>
          )
        })}
      </View>
    )
  }
}

export default My
