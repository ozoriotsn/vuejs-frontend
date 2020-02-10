import Api from './Api'

export default {

  get (id) {
    return Api.get('/products/' + id)
  },
  find (page) {
    return Api.get('/products?page=' + page)
  },
  create (data) {
    return Api.post('/products/', data)
  },
  update (id, data) {
    return Api.put('/products/' + id, data)
  },
  remove (id) {
    return Api.delete('/products/' + id)
  }

}
