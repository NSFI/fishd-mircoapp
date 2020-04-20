import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import { IProps, IState } from './interface'

import FsLoading from '../Loading'
import './index.less'

export default class LoadMore extends Component<IProps, IState> {
  static defaultProps = {
    status: 'default',
    defaultText: '查看更多',
    endText: '没有更多了',
    loadingText: '加载中...',
    errorText: '加载失败，请重试',
    style: {}
  }

  handleLoadMore = () => {
    this.props.onLoadMore && this.props.onLoadMore()
  }

  public render (): JSX.Element {
    const { status, defaultText, endText, loadingText, errorText, style, className } = this.props
    let component: JSX.Element | null = null
    if (status === 'default') {
      component = (
        <View className='fs-loadmore__default' onClick={this.handleLoadMore}>
          <Text className='fs-loadmore__text'>{defaultText}</Text>
        </View>
      )
    }

    if (status === 'loading') {
      component = (
        <View className='fs-loadmore__loading'>
          <FsLoading />
          <Text className='fs-loadmore__text'>{loadingText}</Text>
        </View>
      )
    }

    if (status === 'error') {
      component = (
        <View className='fs-loadmore__error' onClick={this.handleLoadMore}>
          <Text className='fs-loadmore__text'>{errorText}</Text>
        </View>
      )
    }

    if (status === 'end') {
      component = (
        <View className='fs-loadmore__end'>
          <Text className='fs-loadmore__text'>{endText}</Text>
        </View>
      )
    }

    return (
      <View className={classNames('fs-loadmore', className)} style={style}>
        {component}
      </View>
    )
  }
}
