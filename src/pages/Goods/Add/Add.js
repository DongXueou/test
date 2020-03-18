import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message} from 'antd'
import {AddGood} from  '../../../api/goods'


class GoodsAdd extends Component{
  constructor(){
    super()
    this.state={
      name:'77',
      price:'88',
      img:null,
      desc:'好吃',
      foodType:'菜'
    }
  }
  submit=()=>{
    if(!this.state.img) return message.info('请先上传图片')
    AddGood(this.state)
    .then(()=>{message.success('添加ok',1)})
    .catch((err)=>{ message.error('添加失败',1)})
  }
  upload=()=>{
    
    let file = this.refs.file.files[0]
    if(!file) return message.info('请先选择图片')
    let reader = new FileReader() 
    reader.onload=()=>{
      console.log('文件转化结束',reader.result)
      this.setState({img:reader.result})
    }
    reader.readAsDataURL(file)
  }
  render(){
    let {name,price,img,foodType,desc} = this.state
    return (
      <div>
         name: <input type='text' value={name} 
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          />
          <br/>
          price: <input type='text' value={price} 
          onChange={(e)=>{
            this.setState({price:e.target.value})
          }}
          />
          <br/>
          foodType: <input type='text' value={foodType} 
          onChange={(e)=>{
            this.setState({foodType:e.target.value})
          }}
          />
          <br/>
          desc: <input type='text' value={desc} 
          onChange={(e)=>{
            this.setState({desc:e.target.value})
          }}
          />
          <br/>
          缩略图: <input type='file' ref='file'/>
          <img widht='100' height='100' src={img} alt=""/>
          <button onClick={this.upload}>上传图片</button>
          
          <br/>

          <Button type='primary' onClick={this.submit}>提交</Button>
      </div>
    );
  }
}

export default GoodsAdd;
