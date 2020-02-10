import Api from './Api'

export default {

  get (id) {
    return Api.get('/categories/' + id)
  },
  find (page) {
    return Api.get('/categories?page=' + page)
  },
  create (data) {
    return Api.post('/categories/', data)
  },
  update (id, data, params) {
    return Api.put('/categories/' + id, data)
  },
  remove (id, params) {
    return Api.delete('/categories/' + id)
  }
}
