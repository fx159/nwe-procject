import Mock from 'mockjs'
import { getuserinfo } from './response/user'

Mock.mock('http://localhost:3000/user', getuserinfo)

export default Mock
