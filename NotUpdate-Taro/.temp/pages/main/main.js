import Nerv from "nervjs";
/* eslint-disable no-unused-vars */
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtProgress, AtTabs, AtTabsPane, AtGrid } from 'taro-ui';
import { ClSearchBar, ClTitleBar, ClIcon, ClSwitch } from "mp-colorui";

//techart+自定义echart
import EChart from 'techarts';
import * as echarts from '../../echarts';

import { SubTitle } from "../../components/index";
import "./main.scss";

export default class Main extends Taro.Component {

  constructor(props) {
    super(props);
    this.state = {
      pannelCurrent: 0,
      showSearchResult: false,
      monitorSwitch: true,
      logSwitch: false,
      deviceSwitch: true,
      messageSwitch: false
    };
  }

  //当组件在进行挂载操作前，执行的函数
  componentWillMount() {}

  //当组件挂载在 dom 节点后执行。一般会在这里执行一些异步数据的拉取等动作
  componentDidMount() {}

  //当组件准备销毁时执行。在这里一般可以执行一些回收的工作
  //例如 clearInterval(this.timer) 这种对定时器的回收操作
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {};

  handleInput(value) {
    console.log('搜索栏正在输入' + value);
    if (value == '') {
      this.setState({
        showSearchResult: false
      });
    } else {
      this.setState({
        showSearchResult: true
      });
    }
  }

  handleClick(value) {
    this.setState({
      pannelCurrent: value
    });
  }

  FuncCardClick(index) {
    switch (index) {
      case 1:
        Taro.navigateTo({
          url: '/pages/devices/ac'
        });
        console.log('调整空调');
        break;
      case 2:
        console.log('查看温度');
        break;
    }
  }

  handleChange(index, e) {
    switch (index) {
      case 1:
        this.setState({
          monitorSwitch: e
        });
        if (e) {
          console.log('开启监控');
        } else {
          console.log('关闭监控');
        }
        break;
      case 2:
        console.log('调整空调');
        break;
    }
  }

  render() {
    let { monitorSwitch, logSwitch, deviceSwitch, messageSwitch } = this.state;

    let option = {
      backgroundColor: '#2c343c',
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [{ value: 235, name: '视频广告' }, { value: 274, name: '联盟广告' }, { value: 310, name: '邮件营销' }, { value: 335, name: '直接访问' }, { value: 400, name: '搜索引擎' }],
        roseType: 'angle',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };

    return <View className="main">
        <ClTitleBar title="NotU 宿舍管理系统" type="border-title" textColor="grey" borderColor="light-blue" bgColor="none" />
        <ClSearchBar shape="round" placeholder="快捷检索" searchType="none" bgColor="gray" onInput={this.handleInput.bind(this)} showResult={this.state.showSearchResult} //显示搜索结果
      result={[{ title: '监控查询', desc: '近期记录' }, { title: '门窗状态', desc: '是否长时间未关闭' }]} onBlur={() => {
        this.setState({ showSearchResult: false });
      }} //关闭搜索结果
      />
        
        <AtTabs animated={false} current={this.state.pannelCurrent} tabList={[{ title: '基本数据' }, { title: '状态报告' }, { title: '代办列表' }]} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.pannelCurrent} index={0}> 
            <View className="tabPanel">
              <View className="basic-list">
                <View className="basic-list__item shadow" style="background-image: radial-gradient(circle,#3483fce6, #3483fcf2, #3483fc);" onClick={this.FuncCardClick.bind(this, 1)}>
                  <View>
                    <Text className="bold-number">24</Text>
                    <Text>°C</Text>
                  </View>
                  <View>空调温度</View>
                </View>
                <View className="basic-list__item shadow" style="background-image: radial-gradient(circle,#6fa8f5de, #6fa8f5f0, #6fa8f5);" onClick={this.FuncCardClick.bind(this, 2)}>
                  <View>
                    <Text className="bold-number">29</Text>
                    <Text>°C</Text>
                  </View>
                  <View>室内温度</View>
                </View>
                <View className="basic-list__item shadow" style=" background-image: radial-gradient(circle,#7cc4ffde, #7cc4ffeb, #7cc4ff);" onClick={this.FuncCardClick.bind(this, 3)}>
                  <View>
                    <Text className="bold-number">58</Text>
                    <Text>%</Text>
                  </View>
                  <View>室内湿度</View>
                </View>
              </View>
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.pannelCurrent} index={1}>
            <View className="tabPanel">
              <View className="chart-area">
                <EChart echarts={echarts} option={option} />
              </View>
            </View>
          </AtTabsPane>

          <AtTabsPane current={this.state.pannelCurrent} index={2}>
            <View className="tabPanel">
              <AtGrid columnNum={2} data={[{
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '领取中心'
            }, {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '日程标记'
            }, {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '领会员'
            }, {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '新品首发'
            }, {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '领京豆'
            }, {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '资料备份'
            }]} />
            </View>
          </AtTabsPane>
        </AtTabs>
        {/* <AtDivider height='80' style='background-color: #FAFBFC;' /> */}

        

        <SubTitle name="功能入口" />
        
        <View className="function-list">
          <View className="function-list__item">
            <View className="function" style="background-color: #a0b7e2">
              <View className="function-icon">
                <ClIcon iconName="recordfill" size="xsmall"></ClIcon>
              </View>
              <View className="function-menu">
                <ClIcon iconName="moreandroid" size="xsmall"></ClIcon>
              </View>
            </View>
            <View className="function-data">
              <View className="function-name"> 监控开关</View>
              <ClSwitch type="normal" color="olive" checked={monitorSwitch} onChange={this.handleChange.bind(this, 1)} />
            </View>
          </View>
          <View className="function-list__item">
            <View className="function" style="background-color: rgba(180, 183, 185, 0.93);">
              <View className="function-icon">
                <ClIcon iconName="rankfill" size="xsmall"></ClIcon>
              </View>
              <View className="function-menu">
                <ClIcon iconName="moreandroid" size="xsmall"></ClIcon>
              </View>
            </View>
            <View className="function-data">
              <View className="function-name"> 日志记录</View>
              <ClSwitch type="normal" checked={logSwitch} color="olive" onChange={e => {
              console.log(e);
            }} />
            </View>
          </View>
          <View className="function-list__item">
            <View className="function" style="background-color: rgba(173, 192, 210, 0.57);">
              <View className="function-icon">
                <ClIcon iconName="settingsfill" size="xsmall"></ClIcon>
              </View>
              <View className="function-menu">
                <ClIcon iconName="moreandroid" size="xsmall"></ClIcon>
              </View>
            </View>
            <View className="function-data">
              <View className="function-name"> 设备管理</View>
              <ClSwitch disabled type="normal" checked={deviceSwitch} color="olive" onChange={e => {
              console.log(e);
            }} />
            </View>
          </View>
          <View className="function-list__item">
            <View className="function">
              <View className="function-icon" style="background-color: white;color: hsl(240, 56%, 90%);">
                <ClIcon iconName="newsfill" size="xsmall"></ClIcon>
              </View>
              <View className="function-menu" style="color: hsl(240, 56%, 90%);">
                <ClIcon iconName="moreandroid" size="xsmall"></ClIcon>
              </View>
            </View>
            <View className="function-data">
              <View className="function-name"> 短信提醒</View>
              <ClSwitch type="normal" checked={messageSwitch} color="olive" onChange={e => {
              console.log(e);
            }} />
            </View>
          </View>
        </View>
        
        
        <SubTitle name="成员数据" />
        <View className="statistics">
          <View className="progressData">
            <View className="progress-text">
              <View className="progress-weekday">CURRENT/FRIDAY</View>
              <View className="progress-rate">58%</View>
            </View>
          </View>
          <View className="progress-list">
            <View className="progress-list__item">
              <View className="member-name">ZGX</View>
              <View className="progress-bar">
                <AtProgress percent={50} isHidePercent></AtProgress>
              </View>
              <View className="progress-percent">50</View>
            </View>
            <View className="progress-list__item">
              <View className="member-name active">CGY</View>
              <View className="progress-bar">
                <AtProgress color="hsl(43, 100%, 66%)" percent={80} isHidePercent></AtProgress>
              </View>
              <View className="progress-percent">80</View>
            </View>
            <View className="progress-list__item">
              <View className="member-name">WJL</View>
              <View className="progress-bar">
                <AtProgress percent={50} isHidePercent></AtProgress>
              </View>
              <View className="progress-percent">50</View>
            </View>
            <View className="progress-list__item">
              <View className="member-name">ZXY</View>
              <View className="progress-bar">
                <AtProgress percent={70} isHidePercent></AtProgress>
              </View>
              <View className="progress-percent">70</View>
            </View>
            <View className="progress-list__item">
              <View className="member-name">DGD</View>
              <View className="progress-bar">
                <AtProgress percent={30} isHidePercent></AtProgress>
              </View>
              <View className="progress-percent">30</View>
            </View>
          </View>
        </View>

        {/* <View className='funcArea'>
          <ClGrid col={2}>
            <View onClick={this.FuncCardClick.bind(this, 1)} >
              <ClCard>
                 <ClText>首页通知</ClText>
              </ClCard>
            </View>
            <View onClick={this.FuncCardClick.bind(this, 2)}>
              <ClCard>
                 <ClText>首页通知</ClText>
              </ClCard>
            </View>
            <View>
              <ClCard>
                 <ClText>首页通知</ClText>
              </ClCard>
            </View>
            <View>
              <ClCard>
                 <ClText>首页通知</ClText>
              </ClCard>
            </View>
          </ClGrid> 
         */}
      </View>;
  }
}