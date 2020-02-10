import Api from './Api'

export default {

  login (data, params) {
    return Api.post('/login', data)
  },
  logout () {
    return Api.post('/logout')
  }
}
