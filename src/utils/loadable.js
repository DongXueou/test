import Loadable from 'react-loadable';
import  React,{Fragment} from 'react'

 function Loading (){
   return(
     <div style={{width:'100vw',height:'100vh',background:'red'}}>
       懒加载
     </div>
   )
 }


export default (AsyncComponet)=>{

  const LoadableComponent = Loadable({

    loader: AsyncComponet,//() => import('./Set.js'),
 
    loading: Loading,
  });
   
  return ()=>{
     return(<LoadableComponent></LoadableComponent>)
  }
}