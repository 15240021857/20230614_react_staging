// 引入React
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入根组件
import App from './App';
// 浏览器性能分析 --不需要
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode严格使用最新版react语言，旧语法会报错不让写
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
