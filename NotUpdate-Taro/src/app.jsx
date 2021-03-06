import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/devices/ac',
      'pages/devices/hygrothermograph',
      'pages/mine/mine',
      // 'pages/monitor/monitor',
      'pages/autocontrol/autocontrol'
      // 'pages/demo/demo', //每次添加页面都需要在这里配置
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom',
    },
    // subPackages:[
    //   {
    //     "root": "pages/index",
    //     "pages": [
    //       "index"
    //     ]
    //   }, {
    //     "root": "pages/devices/",
    //     "pages": [
    //       "ac",
    //       "hygrothermograph",
    //     ]
    //   },{
    //     "root": "pages/mine/",
    //     "pages": [
    //       "mine",
    //     ]
    //   }
    // ]

    
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
