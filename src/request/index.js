import axios from 'taro-axios'
// import { Toast } from 'antd-mobile'
import { serialize } from '../utils/index'

// 设置默认超时时间
axios.defaults.timeout = 3000
// 返回其他状态码
axios.defaults.validateStatus = status => {
  return status >= 200 && status <= 500
}
// 跨域允许保存cookie
axios.defaults.withCredentials = true

// 请求拦截
axios.interceptors.request.use(
  config => {
    // headers中配置serialize为true开启序列化
    if (config.method === 'post' && config.headers.serialize) {
      config.data = serialize(config.data)
      delete config.data.serialize
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    const status = Number(res.status) || 200
    const message = res.data.msg

    if (status !== 200 || res.data.code === 1) {
      // Toast.fail(message)
      return Promise.reject(new Error(message))
    }
    return res
  },
  error => {
    return Promise.reject(new Error(error))
  }
)

export default axios
