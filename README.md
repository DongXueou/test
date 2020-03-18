###  项目启动
##### 文件的目录结构
utils 工具类 工具模块  localstorage ..
pages 页面组件
components 公有组件
common 公有文件 图片 ...
style  预处理语言样式
api   管理api接口
config 做全局配置

####  预处理语言 less 
npm install less less-loader
create-react-app 创建的项目 默认支持sass 不支持less 想用less 修改配置文件
config/webpack.config.js  将sass 替换成less
重启ok
react 没有样式作用域 相同的类名可能导致样式混合
1. 类名不一样  BEM
2. 样式模块化 
    react脚手架中以及配置了样式模块化 使用的时候只要将xxx.less -> xxx.module.less
    import styles from 'xxx.modules.less'
    <div className={styles.className}>
3. cssinjs  stylecomponent

#### ui框架  核心 cv战士
全局引入
import{ 组件名} from 'antd'
import 'antd/dist.antd.css'
局部引入 按需加载
npm install babel-plugin-import 
在webpackconfigjs文件中搜 babel-loader  找plugins
['import',{ "libraryName": "antd", style: true }]
添加完毕 运行保存 less 3版本和2.73 不兼容
将less 回退版本 npm install  less@2.7.3

将全局引入antd/dist/antd.css 文件删除

#### 搭建基本框架
设定路由的使用层级
登录和admin主页是1级  
admin主页里的内容 xxx管理 xx添加  属于二级

###  用户权限划分
1 token
2.按照用户的权限 渲染不同的侧边栏
  登录之后 获取该用户的权限列表 根据权限列表渲染侧边栏
3.按照用户的权限渲染不同的路由

管理平台pc
布局 百分比  媒体查询  （栅格） 
公用组件
公用模块

#### 登录（注册）
a.一个页面 获取用户信息 掉接口 登录 登录ok 去首页
b.token 
   引导用户重新登录
  1.所有的接口都可能需要token axios 请求拦截器统一添加token
  2.在响应拦截器里处理token 相关的错误码
  3.用模态框引导用户登录放到admin组件里
  4.使用全局状态管理控制modal的出现
  5.取消的时候修改全局状态管理 modal 消失
  6.确定 返回登录页面并且将modal消失

c.登出  调用接口 服务器端保存的token 删除 前端的token 也要删除
e.单点登录  7天免登录
c.验证码
d.前端鉴权  权限验证

#### （大）数据可视化
TradeView 
echarts
three.js
canvas 
svg
d3.js
npm install  echarts 
npm install  echarts-for-react

#### react 路由懒加载  异步组件 异步路由
解决首屏加载过慢    
react-loadable 

#### hooks
让函数组件有类组件的相关特性
useState  让函数组件可以使用state 可以在函数组件里修改数据
useEffect 可以让函数组件使用生命周期  DidMount  DidUpdate  willUnmount
useRefs 
useContext
..
#### 富文本编辑器  markdown 拓扑图编辑器 ...
http://note.youdao.com/noteshare?id=4835579af41c46645f1d03eb81ccc655
https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
1.contentEditerable  控制元素是或可以被修改
2.document.ecexCommend()
