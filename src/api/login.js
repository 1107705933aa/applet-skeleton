import request from '../request'

function fetchLogin() {
  return request({
    url: 'https://mock.yonyoucloud.com/mock/3852/TaroFirst/log',
    method: 'get'
  })
}

export default fetchLogin


