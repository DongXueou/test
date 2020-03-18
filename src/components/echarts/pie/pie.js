import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Pie extends Component{
constructor(){
  super()
  this.state={
    option:{
      series: [
        {
            name: '食物',
            type: 'pie',
            radius: ['20%','50%'],
            center: ['50%', '50%'],
            data:[{value: 20, name: '炸鸡'},]
        }
    ]
    }
  }
}
componentDidMount(){
  setTimeout(() => {
    let data =  [
      {value: 20, name: '火锅'},
      {value: 40, name: '烤肉'},
      {value: 30, name: '炸鸡'},
      {value: 50, name: '奶茶'},
      {value: 60, name: '薯片'}
  ] 
  let option = JSON.parse(JSON.stringify(this.state.option ))
  option.series[0].data=data
  this.setState({option},()=>{
    console.log(this)
  })
  },3000);
}
componentDidUpdate(){
  console.log('图表更新结束')
}
render() {
  console.log('图标render')
  let {option} = this.state
 return(
   <div style={{width:'300px',height:'300px',border:'1px solid #eee'}}>  
     <ReactEcharts option={option}></ReactEcharts>
   </div>
 )
}
}
export default Pie;
