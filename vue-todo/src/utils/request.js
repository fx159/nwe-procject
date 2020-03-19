import axios from 'axios'
const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'
class Httprequest {
  constructor (baseurl = baseUrl) {
    this.baseurl = baseurl
    this.queue = {}
  }

  setconfig () {
    const config = {
      baseURL: this.baseurl,
      headers: {}
    }
    return config
  }

  interceptors (instance) {
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const service = axios.create()
    options = Object.assign(this.setconfig(), options)
    this.interceptors(service)
    return service(options)
  }
}
export default Httprequest
