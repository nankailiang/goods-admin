// 进行local数据存储管理的工具模块
const USER_KEY = 'user'

// 保存user
export const saveUser = user => localStorage.setItem(USER_KEY, JSON.stringify(user))

// 保存user
export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY) || '{}')

// 保存user
export const removeUser = () => localStorage.removeItem(USER_KEY)
