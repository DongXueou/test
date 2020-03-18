import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/router';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import  Box from './hooks/box'
import store from  './store/store'
import  RichEditor from  './RichEditer/box'
// import  'antd/dist/antd.css'

ReactDOM.render(
<Provider store={store}>
<App /> 
</Provider> 
, document.getElementById('root'));
{/* <Box></Box> */}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
