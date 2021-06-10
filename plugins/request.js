/**
 *  基于 axios 封装的请求模块
 */

import axios from 'axios'

// 创建请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取到上下文对象
export default ({ store }) => {
  // 添加请求拦截器
  request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    // 返回config配置对象
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

  // 响应拦截器
}