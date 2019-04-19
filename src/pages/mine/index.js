import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtAvatar, AtButton, AtList, AtListItem } from 'taro-ui'
import util from '@/util'
import './index.scss'

@connect(({ auth }) => ({
  token: auth.token,
  userInfo: auth.userInfo
}), (dispatch) => ({
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  login = () => {
    util.doIfLogin()
  }

  render () {
    return (
      <View className='m-page'>
        <View className='m-user-info'>
          <AtAvatar circle openData={{ type: 'userAvatarUrl' }} className='avatar' />
          <open-data type='userNickName' />
        </View>
        {
          this.props.userInfo ? (
            <AtList>
              <AtListItem title='学号' note={this.props.userInfo.sid} />
              <AtListItem title='我的报名' arrow='right' />
              <AtListItem title='我的签到' arrow='right' />
              <AtListItem title='我的信息' arrow='right' extraText='修改' />
              <AtListItem title='重新登录' arrow='right' />
            </AtList>
          ) : <AtButton type='primary' className='u-go-login' onClick={this.login}>登录</AtButton>
        }
      </View>
    )
  }
}

export default Index
