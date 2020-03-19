import request from '../utils/request'
// eslint-disable-next-line new-cap
const axios = new request()
export const getuser = ({ userid }) => {
  return axios.request({
    url: '/user',
    method: 'post',
    data: {
      userid
    }
  })
}
