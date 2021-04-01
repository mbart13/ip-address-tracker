import axios from 'axios'

const { API_KEY } = process.env;
const baseUrl = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`

const getIPData = async(domain='') => {
  const request = await axios.get(`${baseUrl}&domain=${domain}`)
  return request.data
}

export default getIPData