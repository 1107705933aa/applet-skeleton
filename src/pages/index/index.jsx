import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import Finance from '../Finance'
import Menu from '../menu'
import My from '../My'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  /**
   * 设置顶部标题
   */
  config = {
    navigationBarTitleText: '移动金融'
  }

  /**
   * 设置当前tab页的编号
   */
  handleClick(current) {
    this.setState({
      current
    })
  }

  render() {
    const { current } = this.state
    const { handleClick } = this
    return (
      <View className='madp-index'>
        {current === 0 && <Menu />}
        {current === 1 && <Finance />}
        {current === 2 && <My />}
        <AtTabBar
          tabList={[
            {
              title: '菜单',
              image: require('../../assets/img/menu.png'),
              selectedImage: require('../../assets/img/selectMenu.png'),
              text: 'new'
            },
            {
              title: '金融',
              image: require('../../assets/img/finance.png'),
              selectedImage: require('../../assets/img/selectFinance.png')
            },
            {
              title: '我的',
              image: require('../../assets/img/my.png'),
              selectedImage: require('../../assets/img/selectMy.png'),
              text: 100,
              max: 99
            }
          ]}
          fixed
          onClick={handleClick}
          current={current}
          color='#252525'
          selectedColor='#0F06EF'
        />
      </View>
    )
  }
}
