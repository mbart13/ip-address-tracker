import axios from 'axios'
const baseUrl = 'https://geo.ipify.org/api/v1?apiKey=at_XaLMcw0hXDs75kIMjgNzNCfQiQ4IJ'

const getIPData = async(domain='') => {
  const request = await axios.get(`${baseUrl}&domain=${domain}`)
  return request.data
}

export default getIPData