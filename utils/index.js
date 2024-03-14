const saveStorage = function (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

const getStorage = function (key, item) {
  if (localStorage.getItem(key) && item) {
    const data = JSON.parse(localStorage.getItem(key))
    return data[item]
  } else if (localStorage.getItem(key)) {
    return localStorage.getItem(key)
  }
}

const clearStorage = function (key = 'false') {
  if (key) {
    localStorage.removeItem(key)
  } else {
    localStorage.clear()
  }
}

const getCookie = function (name) {
  let arr
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  // if (window?.document?.cookie) {
  //   if ((arr = document.cookie.match(reg))) {
  //     return arr[2]
  //   }
  // } else {
  //   return null
  // }
  return '2a2e8119-568e-43a0-ad49-24493104c1f0'
}

export { getStorage, saveStorage, clearStorage, getCookie }
