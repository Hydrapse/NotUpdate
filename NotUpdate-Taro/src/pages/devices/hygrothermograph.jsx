import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNavBar, AtList, AtListItem, AtButton } from "taro-ui"

import {Temperature, TaroTitle} from "../../components"

import "./devices.scss"

export default class Ac extends Component{
    constructor (props){
    super(props)
    this.state = {
    }
  }

  config = {
    navigationBarTitleText: '温湿度计设置'
  }

  navHome() {
    Taro.navigateBack()
  }

  render(){

      let navBarMarginTop = Taro.getMenuButtonBoundingClientRect().top
      const style = {
        paddingTop: navBarMarginTop + 'px'
      }
      return(
          <View className='devices' style={style}>
            <AtNavBar 
              onClickLeftIcon={this.navHome}
              color='#000'
              title='温湿度计设置'
              leftIconType='chevron-left'
            />
            <TaroTitle name='近一个月数据'></TaroTitle>

            {/* 温湿度图表 */}
            <Temperature></Temperature> 
            
            <View style='margin-top=20px'>
              <TaroTitle name='具体设置'></TaroTitle>
              <View className='th-calc-setup'>
                <AtList> 
                  <AtListItem
                    isSwitch
                    title='温度计开关'
                    hasBorder={false}
                    switchIsCheck
                    // iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
                  />
                  <AtListItem
                    isSwitch
                    title='湿度计开关'
                    hasBorder={false}
                    switchIsCheck
                    // iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
                  />  
                </AtList>
                <View style='padding-top: 35px'>
                  <AtButton circle type='primary'>数据导出</AtButton>
                </View>
                
              </View>
            
            </View>
            
            
          </View>
      )
  }
}
