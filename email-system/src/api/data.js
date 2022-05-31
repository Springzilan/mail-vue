import axios from "./axios";
export const getMenu = (param) => {
  return axios.request({
    url: '/mail/getMail',
    method: 'post',
    data: param
  })
}