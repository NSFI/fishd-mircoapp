import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import { IProps, IState } from './interface'

import './index.less'

export default class Loading extends Component<IProps, IState> {

  static defaultProps = {
    size: 24,
    color: '',
    className: ''
  }

  public render(): JSX.Element {
    const { size, color, className } = this.props
    const loadingSize = typeof size === 'string' ? size : String(size)

    const sizeStyle = {
      width: size ? `${Taro.pxTransform(parseInt(loadingSize))}` : '',
      height: size ? `${Taro.pxTransform(parseInt(loadingSize))}` : ''
    }

    const colorStyle = {
      border: color ? `1px solid ${color}` : '',
      'border-color': color
        ? `${color} transparent transparent transparent`
        : ''
    }
    
    const ringStyle = Object.assign({}, colorStyle, sizeStyle)
    
    return (
      <View className={classNames('fs-loading', className)} style={sizeStyle}>
        <View className='fs-loading__ring' style={ringStyle}></View>
        <View className='fs-loading__ring' style={ringStyle}></View>
        <View className='fs-loading__ring' style={ringStyle}></View>
      </View>
    )
  }
}
