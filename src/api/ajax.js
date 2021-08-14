// axios封装
import axios from 'axios'

export default function ajax(url, data={}, method='get') {
    // 为所有请求添加公共地址
    const URL = 'http://localhost:3001' + url

    // 将普通对象转化为JSON对象
    const DATA = JSON.parse(JSON.stringify(data))

    // 将请求类型参数转化为小写来做判断
    const type = method.toLowerCase()
    
    if(type === 'get') {
        return axios.get(url, {
            params: data
        })
    } else if (type === 'post') {
        return axios.post(URL, DATA)
    } else {
        console.log('请求类型错误')
    }
}