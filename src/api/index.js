import { ElMessage } from 'element-plus'

// 请求基础路径
const baseUrl = '/api'

// 封装请求
const http = async (url, options) => {
  // 如果是get请求，将参数拼接到url上
  if (options.method === 'GET' && options.data) {
    const params = new URLSearchParams(options.data)
    url += `?${params.toString()}`
  }
  return fetch(baseUrl + url, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  })
    .then(res => res.json())
    .then(res => {
      if (res.code !== 200) {
        return Promise.reject(res.msg)
      }
      return Promise.resolve(res)
    })
    .catch(err => {
      ElMessage.error(err)
      return Promise.reject(err)
    })
}

/**
 * @description 获取搜索关注度数据
 * @param {*} params
 */
export const getSearchAttentionByCountryAndTimeQuantum = params =>
  http('/searchAttention/getSearchAttentionByCountryAndTimeQuantum', {
    method: 'POST',
    body: JSON.stringify(params)
  })

