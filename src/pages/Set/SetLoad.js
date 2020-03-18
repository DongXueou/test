import Loadable from 'react-loadable';
import  React from 'react'
 function Loading (){
   return(
     <div style={{width:'100vw',height:'100vh',background:'red'}}>
      懒加载
     </div>
   )
 }

const LoadableComponent = Loadable({
  loader: () => import('./Set.js'),
  loading: Loading,
});
 
export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}