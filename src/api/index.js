// 所有接口请求函数
import ajax from './ajax'

// 用户登录
export const login = data => ajax('/user/login', data, 'post')

// 用户注册
export const register = data => ajax('/user/register', data, 'post')