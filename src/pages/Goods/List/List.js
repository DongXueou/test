import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer} from 'antd'
import {GetGoods,DelGood} from  '../../../api/goods'
import  GoodsUpdate from  '../Update/Update'

const pageSize=3
class GoodsList extends Component{
  constructor(){
    super()
    this.columns=[
      {
        title:'id',
        dataIndex:'_id',
        width:100,
        ellipsis: true,
        // fixed:'left'
      },
      {
        title:'姓名',
        dataIndex:'name',
        width:100,
        // fixed:'left'
      },
      {
        title:'描述',
        dataIndex:'desc',
        width:200
      },
      {
        title:'价格',
        dataIndex:'price',
        width:100
      },
      {
        title:'类型',
        dataIndex:'foodType',
        width:100,
      },
      {
        title:'图片',
        dataIndex:'img',
        width:200,
        render(data) {
          return (
            <img src={data} width='100' height='80' alt=""/>
          )
        },
      },
      {
        title:'操作',
        fixed:'right',
        width:180,
        render:(data)=> {
          return(
            <Fragment>
              <Popconfirm
                title='确定要删除本条数据吗？'
                onConfirm={()=>{
                  // console.log(this,data._id)
                  this.delData(data._id)
                }}
                okText='删除'
                cancelText='取消'
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              <Button type='primary' size='small' onClick={()=>{
        
                this.setState({drawerShow:true,updataInfo:data})
              }}>修改</Button>
            </Fragment>
          )
        },
      }
    ]
    this.state={
      drawerShow:false,
      spinning:false,
      nowPage:1, 
      allCount:0, 
      dataSource:[],
      updataInfo:{},
    }
  }
  componentDidMount(){
      this.getTableData(1)
  }
  delData(id){
    DelGood(id).then(()=>{
      message.success('删除ok',1)
      this.getTableData()
    })

  }
  getTableData(nowPage=1){
    this.setState({spinning:true})
    GetGoods(nowPage,pageSize)
    .then((res)=>{
      console.log(res)
      this.setState({dataSource:res.list.foods,allCount:res.list.allCount,spinning:false})
    })
  }
  render(){
    let {dataSource,allCount,spinning,drawerShow,updataInfo}=this.state
    return (
      <div >
        <Spin spinning={spinning}>
         <Table columns={this.columns} 
          dataSource={dataSource}
          rowKey='_id'
          pagination={false}
          scroll={{y:280,x:500}}
          ></Table>
        </Spin>
        <Pagination 
          simple  
          total={allCount} 
          pageSize={pageSize} 
          onChange={(page)=>{
            console.log('目标页数',page)
            this.getTableData(page)
          }}
        />
        <Drawer
          closable={true}
          onClose={()=>{this.setState({drawerShow:false}) }}
          visible={drawerShow}
        >
          <GoodsUpdate 
            updataInfo={updataInfo} 
            refreshList={()=>{
              this.setState({drawerShow:false}) 
              this.getTableData()
            }}></GoodsUpdate>
        </Drawer>
      </div>
    );
  }
}

export default GoodsList;
