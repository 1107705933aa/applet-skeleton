/**
 * 表单序列化
 * @param data
 * @returns {string}
 */
export const serialize = data => {
  const list = []
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&')
}

/**
 * 获取对象类型
 * @param obj   要获取的对象
 * @returns {*} 对象类型
 */
export const getObjType = obj => {
  let toString = Object.prototype.toString
  let map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

/**
 * 对象深拷贝
 * @param data
 * @returns {{}|*}
 */
export const deepClone = data => {
  let type = getObjType(data)
  let obj
  if (type === 'array') {
    obj = []
  } else if (type === 'object') {
    obj = {}
  } else {
    // 不再具有下一层次
    return data
  }
  if (type === 'array') {
    for (let i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]))
    }
  } else if (type === 'object') {
    for (let key in data) {
      obj[key] = deepClone(data[key])
    }
  }
  return obj
}

/**
 * 验证当前环境是否为开发环境
 * @returns {boolean}
 */
export const isDev = () => {
  return Object.is(process.env.NODE_ENV, 'development')
}
