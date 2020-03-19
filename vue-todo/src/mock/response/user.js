import Mock from 'mockjs'

export const getuserinfo = (options) => {
  const template = {
    'name|5-10': 'fx159',
    'age|0-90': 10,
    img: Mock.mock('@image')
  }
  return Mock.mock(template)
}
