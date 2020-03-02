import request from './network.js'

export function getHomeMultiData() {
  return request({
    url: '/homeInfo'
  })
}