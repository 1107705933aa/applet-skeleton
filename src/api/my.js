import request from '../request'

function fetchMy() {
  return request({
    url: 'https://mock.yonyoucloud.com/mock/3852/TaroFirst/list',
    method: 'get'
  })
}

export default fetchMy