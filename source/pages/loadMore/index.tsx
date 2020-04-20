import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

import FsLoadMore from '../../components/LoadMore'

export default class LoadMore extends Component {

  config: Config = {
    navigationBarTitleText: '页面提示'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleLoadMore = () => {
    console.log('>>> 触发加载更多')
  }

  render () {
    return (
      <View className='index'>
        <FsLoadMore onLoadMore={this.handleLoadMore}></FsLoadMore>
        <FsLoadMore status='loading'></FsLoadMore>
        <FsLoadMore status='error' onLoadMore={this.handleLoadMore}></FsLoadMore>
        <FsLoadMore status='end'></FsLoadMore>
      </View>
    )
  }
}
