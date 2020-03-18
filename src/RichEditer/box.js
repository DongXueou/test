import React ,{Component, Fragment} from 'react'
import './index.less'
import { Button } from 'antd'
class RichEditor extends Component{
  constructor(){
    super()
  }
  preview=()=>{
    let edit= this.refs.editor.innerHTML 
    console.log('编辑内容',edit)
    this.refs.preview.innerHTML =edit
  }
  render(){
    return(
      <div class='wrapper'>
        <div className='editor'>
          <h3>编辑区</h3>
          <div class='tools'>
          <Button onClick={()=>{
            document.execCommand('bold', false, null);
          }}> 加粗</Button>
          <Button onClick={()=>{
            document.execCommand('formatblock', false, '<h1>');
          }}>h1</Button>
          <Button onClick={()=>{
            let url = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584522096&di=44c2047aefc8d9988f52b6a529ecd3fe&src=http://images.jiayuan.com/w4/global/cms/uploadfile/2016/0114/20160114033320854.jpg'
            document.execCommand('insertImage', false, url);
          }}>图片</Button>
          </div>
          <div contentEditable ref='editor' className='content'>
            <p>hello</p>
          </div>
        </div>
        <div className='preview'>
          <h3>预览区</h3>
          <button onClick={this.preview}>预览</button>
          <div ref='preview'>

          </div>
        </div>
      </div>
    )
  }
}
export default RichEditor
