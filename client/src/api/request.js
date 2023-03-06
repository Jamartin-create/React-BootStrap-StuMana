//封装axios

import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  //config为请求，这里做一些处理
  return config; //放行
});
request.interceptors.response.use(
  (response) => {
    //对响应做一些处理
    return response.data;
  },
  (error) => {
    //对错误进行处理
    return Promise.reject(error);
  }
);

export default request;
